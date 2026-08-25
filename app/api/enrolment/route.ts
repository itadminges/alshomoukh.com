import { NextResponse } from "next/server"

export const runtime = "nodejs"

const requiredFields = ["parentName", "phone", "email", "address", "enrolmentDecision"] as const

function clean(value: FormDataEntryValue | null, maxLength = 3000) {
  if (typeof value !== "string") return ""

  return Array.from(value)
    .filter((character) => {
      const code = character.charCodeAt(0)
      return code === 9 || code === 10 || code === 13 || code >= 32
    })
    .join("")
    .trim()
    .slice(0, maxLength)
}

function formatCurrentStudents(form: FormData) {
  return [1, 2, 3, 4, 5].map((student) => ({
    name: clean(form.get(`currentStudent${student}Name`), 120),
    grade: clean(form.get(`currentStudent${student}Grade`), 40),
  }))
}

function formatNewStudents(form: FormData) {
  return [1, 2, 3].map((student) => {
    const prefix = `newStudent${student}`
    return {
      name: clean(form.get(`${prefix}Name`), 120),
      grade: clean(form.get(`${prefix}Grade`), 40),
      day: clean(form.get(`${prefix}Day`), 2),
      month: clean(form.get(`${prefix}Month`), 12),
      year: clean(form.get(`${prefix}Year`), 4),
      gender: clean(form.get(`${prefix}Gender`), 10),
    }
  })
}

export async function POST(request: Request) {
  try {
    const form = await request.formData()

    if (clean(form.get("website"))) return NextResponse.json({ message: "Form received." })

    for (const field of requiredFields) {
      if (!clean(form.get(field), 300)) {
        return NextResponse.json({ message: "Please complete all required fields." }, { status: 400 })
      }
    }

    const email = clean(form.get("email"), 254)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 })
    }

    const currentStudents = formatCurrentStudents(form)
    if (currentStudents.some((student) => !student.name || !student.grade)) {
      return NextResponse.json({ message: "Please enter the name and grade of each registered student." }, { status: 400 })
    }

    const decision = clean(form.get("enrolmentDecision"), 20)
    if (!new Set(["enrol", "transfer"]).has(decision)) {
      return NextResponse.json({ message: "Please select an enrolment option." }, { status: 400 })
    }

    const reason = clean(form.get("reason"), 1000)
    const destination = clean(form.get("destination"), 300)
    if (decision === "transfer" && (!reason || !destination)) {
      return NextResponse.json({ message: "Please provide the transfer reason and school name or country." }, { status: 400 })
    }

    const apiKey = process.env.RESEND_API_KEY
    const from = process.env.ENROLMENT_FROM_EMAIL
    const to = process.env.ENROLMENT_TO_EMAIL || "admission@alshomoukh.com"

    if (!apiKey || !from) {
      return NextResponse.json({ message: "Online submission is being configured. Please email admission@alshomoukh.com for assistance." }, { status: 503 })
    }

    const parentName = clean(form.get("parentName"), 120)
    const newStudents = formatNewStudents(form)
    const lines = [
      "ENROLMENT FORM — SCHOOL YEAR 2026/2027",
      "",
      "PARENT / GUARDIAN",
      `Name: ${parentName}`,
      `Phone: ${clean(form.get("phone"), 40)}`,
      `Email: ${email}`,
      `Address: ${clean(form.get("address"), 300)}`,
      "",
      "REGISTERED STUDENTS",
      ...currentStudents.map((student, index) => `${index + 1}. ${student.name} — Grade ${student.grade}`),
      "",
      "ENROLMENT CONFIRMATION",
      decision === "enrol" ? "The parent/guardian wishes to enrol the listed child(ren) for 2026/2027." : "The parent/guardian will transfer the listed child(ren).",
      `Reason: ${reason || "Not applicable"}`,
      `School / Country: ${destination || "Not applicable"}`,
      "",
      "NEW STUDENTS",
      ...newStudents.flatMap((student, index) => [
        `Student ${index + 1}: ${student.name || "Not provided"}`,
        `Grade: ${student.grade || "Not provided"}`,
        `Date of birth: ${student.day && student.month && student.year ? `${student.day}/${student.month}/${student.year}` : "Not provided"}`,
        `Gender: ${student.gender || "Not provided"}`,
        "",
      ]),
    ]

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `2026/2027 enrolment form — ${parentName}`,
        text: lines.join("\n"),
      }),
    })

    if (!response.ok) {
      console.error("Enrolment delivery failed", response.status, await response.text())
      return NextResponse.json({ message: "The form could not be delivered. Please try again or email Admissions." }, { status: 502 })
    }

    return NextResponse.json({ message: "Thank you. Your enrolment form has been submitted to Admissions." })
  } catch (error) {
    console.error("Enrolment submission error", error)
    return NextResponse.json({ message: "The form could not be submitted. Please try again." }, { status: 500 })
  }
}
