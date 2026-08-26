"use client"

import { useState } from "react"
import Link from "next/link"
import { CheckCircle2, Send, Phone, Mail, Clock, Calendar, ArrowRight, AlertCircle, Info } from "lucide-react"
import { PageHero } from "@/components/page-hero"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Set to true to re-enable the online enrolment form
const SHOW_ENROLMENT_FORM = false

type SubmissionState = "idle" | "submitting" | "success" | "error"

const fieldClass = "h-12 rounded-none border-navy/15 focus:border-gold"
const selectClass = "h-12 w-full rounded-none border border-navy/15 bg-white px-3 text-sm text-navy outline-none focus:border-gold"
const currentStudents = [1, 2, 3, 4, 5]
const newStudents = [1, 2, 3]
const days = Array.from({ length: 31 }, (_, index) => String(index + 1))
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const years = Array.from({ length: 20 }, (_, index) => String(2026 - index))

export default function EnrolmentPage() {
  if (!SHOW_ENROLMENT_FORM) {
    return <EnrolmentNotice />
  }

  return <EnrolmentForm />
}

function EnrolmentNotice() {
  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <PageHero
        title="Admissions & Enrolment"
        subtitle="School Year 2026/2027 | العام الدراسي ٢٠٢٧/٢٠٢٦م"
        backgroundImage="/images/final/primary-classroom.webp"
      />

      <section className="bg-ivory/30 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6 md:px-10">
          <div className="border border-navy/10 bg-white p-8 shadow-strong md:p-12">
            
            {/* Header Status */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold">
                <Info className="h-4 w-4" />
                <span>Notice | تنويه</span>
              </div>
              <h2 className="text-2xl font-bold uppercase tracking-tight text-navy md:text-3xl">
                Online Enrolment Form is Currently Offline
              </h2>
              <p dir="rtl" className="mt-2 text-xl font-bold text-gold">
                نموذج التسجيل الإلكتروني مغلق حالياً
              </p>
            </div>

            {/* Description */}
            <div className="mt-8 space-y-4 border-y border-navy/10 py-8 text-center text-sm font-medium leading-relaxed text-navy/75 md:text-base">
              <p>
                The online enrolment form is temporarily paused. For new admissions, student registration, seat reservations, and enquiries for the upcoming academic year 2026/2027, please contact our Admissions Office directly or schedule a campus visit.
              </p>
              <p dir="rtl" className="text-navy/70">
                يرجى العلم بأن نموذج التسجيل الإلكتروني غير متاح حالياً. لجميع استفسارات التسجيل والقبول وحجز المقاعد للعام الدراسي ٢٠٢٧/٢٠٢٦م، يرجى التواصل مباشرة مع قسم القبول والتسجيل أو حجز موعد لزيارة المدرسة.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 border border-navy/10 bg-ivory/20 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-navy text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy">Direct Calls</h3>
                  <div className="mt-1 space-y-1">
                    <a href="tel:+96824284756" className="block text-sm font-semibold text-gold hover:underline">
                      +968 24284756
                    </a>
                    <a href="tel:+96824284771" className="block text-sm font-semibold text-gold hover:underline">
                      +968 24284771
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 border border-navy/10 bg-ivory/20 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-navy text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-navy">Email Admissions</h3>
                  <div className="mt-1">
                    <a href="mailto:admission@alshomoukh.com" className="text-sm font-semibold text-gold hover:underline break-all">
                      admission@alshomoukh.com
                    </a>
                  </div>
                  <p className="mt-1 text-xs text-navy/60">Sunday – Thursday</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild className="h-13 bg-gold px-8 font-bold uppercase tracking-widest text-white hover:bg-gold/90 rounded-none">
                <Link href="/contact">
                  Contact Admissions
                  <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-13 border-navy/20 bg-transparent px-8 font-bold uppercase tracking-widest text-navy hover:bg-navy hover:text-white rounded-none">
                <Link href="/book-a-tour">
                  <Calendar className="mr-2 h-4 w-4 shrink-0" />
                  Book a Campus Tour
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-13 border-navy/20 bg-transparent px-8 font-bold uppercase tracking-widest text-navy hover:bg-navy hover:text-white rounded-none">
                <Link href="/admissions">
                  Admissions Overview
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}

function EnrolmentForm() {
  const [state, setState] = useState<SubmissionState>("idle")
  const [message, setMessage] = useState("")
  const [enrolmentDecision, setEnrolmentDecision] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState("submitting")
    setMessage("")

    const form = event.currentTarget
    const payload = new FormData(form)

    try {
      const response = await fetch("/api/enrolment", { method: "POST", body: payload })
      const result = (await response.json()) as { message?: string }
      if (!response.ok) throw new Error(result.message || "The form could not be submitted.")

      form.reset()
      setEnrolmentDecision("")
      setState("success")
      setMessage(result.message || "Your form has been submitted to Admissions.")
    } catch (error) {
      setState("error")
      setMessage(error instanceof Error ? error.message : "The form could not be submitted.")
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <PageHero
        title="Online Enrolment"
        subtitle="School Year 2026/2027 | العام الدراسي ٢٠٢٧/٢٠٢٦م"
        backgroundImage="/images/final/primary-classroom.webp"
      />

      <section className="bg-ivory/30 py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 md:px-10">
          <form onSubmit={handleSubmit} className="border border-navy/10 bg-white p-7 shadow-strong md:p-12">
            <input name="website" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <FormSection title="Information" arabicTitle="بيانات">
              <div className="grid gap-6 md:grid-cols-2">
                <BilingualField label="Name of Parent/Guardian *" arabicLabel="اسم ولي الأمر / الوصي" htmlFor="parent-name">
                  <Input id="parent-name" name="parentName" required maxLength={120} autoComplete="name" placeholder="Enter Name of Parent/Guardian" className={fieldClass} />
                </BilingualField>
                <BilingualField label="Phone *" arabicLabel="رقم الهاتف" htmlFor="phone">
                  <Input id="phone" name="phone" required maxLength={40} type="tel" autoComplete="tel" placeholder="E.g., 00968 90000000" className={fieldClass} />
                </BilingualField>
                <BilingualField label="Email Address *" arabicLabel="البريد الإلكتروني" htmlFor="email">
                  <Input id="email" name="email" required maxLength={254} type="email" autoComplete="email" placeholder="E.g., john@doe.com" className={fieldClass} />
                </BilingualField>
                <BilingualField label="Address *" arabicLabel="العنوان" htmlFor="address">
                  <Input id="address" name="address" required maxLength={300} autoComplete="street-address" placeholder="Enter Address" className={fieldClass} />
                </BilingualField>
              </div>
            </FormSection>

            <FormSection title="Registered Student(s)" arabicTitle="الطلبة المسجلون">
              <p className="mb-2 text-sm font-medium text-navy/70">Please list the names of your currently enrolled children.</p>
              <p dir="rtl" className="mb-8 text-right text-sm font-medium text-navy/70">يرجى كتابة أسماء الطلبة المسجلين حالياً.</p>
              <div className="space-y-8">
                {currentStudents.map((student) => (
                  <div key={student} className="grid gap-6 border-b border-navy/10 pb-8 last:border-b-0 last:pb-0 md:grid-cols-2">
                    <BilingualField label={`Child Name (as per passport) (${student}) *`} arabicLabel={`اسم الطالب (مطابقاً لجواز السفر) (${student})`} htmlFor={`current-student-${student}-name`}>
                      <Input id={`current-student-${student}-name`} name={`currentStudent${student}Name`} required maxLength={120} placeholder="Name" className={fieldClass} />
                    </BilingualField>
                    <BilingualField label="Grade (2026/2027) *" arabicLabel="الصف" htmlFor={`current-student-${student}-grade`}>
                      <Input id={`current-student-${student}-grade`} name={`currentStudent${student}Grade`} required maxLength={40} placeholder="Enter Grade" className={fieldClass} />
                    </BilingualField>
                  </div>
                ))}
              </div>
            </FormSection>

            <FormSection title="Enrolment Confirmation" arabicTitle="تأكيد التسجيل">
              <p className="mb-6 text-sm font-bold text-navy">Please check one of the boxes. <span dir="rtl">(الرجاء وضع علامة في إحدى الخانات) *</span></p>
              <div className="space-y-5">
                <DecisionOption
                  value="enrol"
                  checked={enrolmentDecision === "enrol"}
                  onChange={setEnrolmentDecision}
                  english="I wish to enrol my child(ren) in Al Shomoukh International Private School for school year 2026/2027."
                  arabic="أرغب في تسجيل ابني/ابنتي (أبنائي) في مدرسة الشموخ الدولية الخاصة للعام الدراسي ٢٠٢٧/٢٠٢٦م"
                />
                <DecisionOption
                  value="transfer"
                  checked={enrolmentDecision === "transfer"}
                  onChange={setEnrolmentDecision}
                  english="I will not enrol my child(ren) in Al Shomoukh International Private School for school year 2026/2027. I am transferring him/her (them) to the school or country indicated below."
                  arabic="لا أرغب في تسجيل ابني/ابنتي (أبنائي) في مدرسة الشموخ الدولية الخاصة للعام الدراسي ٢٠٢٧/٢٠٢٦م، وسوف يتم نقله / نقلها (نقلهم) إلى المدرسة / الدولة المذكورة أدناه."
                />
              </div>
              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <BilingualField label="Reason *" arabicLabel="السبب" htmlFor="reason">
                  <Textarea id="reason" name="reason" required={enrolmentDecision === "transfer"} maxLength={1000} placeholder="Enter reason" className="min-h-28 rounded-none border-navy/15 focus:border-gold" />
                </BilingualField>
                <BilingualField label="Please Enter School Name / Country *" arabicLabel="الرجاء ذكر اسم المدرسة / الدولة" htmlFor="destination">
                  <Textarea id="destination" name="destination" required={enrolmentDecision === "transfer"} maxLength={300} placeholder="Please Enter School Name / Country" className="min-h-28 rounded-none border-navy/15 focus:border-gold" />
                </BilingualField>
              </div>
            </FormSection>

            <FormSection title="New Student" arabicTitle="طالب جديد">
              <p className="mb-2 text-sm font-medium leading-relaxed text-navy/70">If you would like to enrol any new child(ren) in Al Shomoukh International Private School, please fill in the information below.</p>
              <p dir="rtl" className="mb-8 text-right text-sm font-medium leading-relaxed text-navy/70">إذا كنت ترغب في تسجيل أي طالب جديد في مدرسة الشموخ الدولية الخاصة، الرجاء إكمال البيانات التالية.</p>
              <div className="space-y-10">
                {newStudents.map((student) => <NewStudentFields key={student} student={student} />)}
              </div>
            </FormSection>

            <p className="mt-8 text-center text-sm font-medium text-navy/70">Click “Submit” to send the form.</p>

            {message && (
              <div role="status" className={`mt-6 flex items-start gap-3 border p-4 text-sm font-medium ${state === "success" ? "border-green-300 bg-green-50 text-green-800" : "border-red-300 bg-red-50 text-red-800"}`}>
                {state === "success" && <CheckCircle2 className="h-5 w-5 shrink-0" />}
                <span>{message}</span>
              </div>
            )}

            <Button disabled={state === "submitting"} type="submit" className="mt-6 h-14 w-full rounded-none bg-gold font-bold uppercase tracking-[0.22em] text-white hover:bg-gold/90 disabled:opacity-60">
              <Send className="mr-2 h-4 w-4 shrink-0" />
              {state === "submitting" ? "Submitting…" : "Submit"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  )
}

function FormSection({ title, arabicTitle, children }: { title: string; arabicTitle: string; children: React.ReactNode }) {
  return (
    <fieldset className="mb-10 border-b border-navy/10 pb-10 last:mb-0 last:border-b-0">
      <legend className="mb-7 flex w-full items-center justify-between gap-4 text-2xl font-bold uppercase tracking-tight text-navy">
        <span>{title}</span><span dir="rtl" className="text-gold">{arabicTitle}</span>
      </legend>
      {children}
    </fieldset>
  )
}

function BilingualField({ label, arabicLabel, htmlFor, children }: { label: string; arabicLabel: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="flex min-h-10 items-start justify-between gap-3 text-xs font-bold uppercase tracking-wider text-navy">
        <span>{label}</span><span dir="rtl" className="text-right tracking-normal text-gold">{arabicLabel}</span>
      </label>
      {children}
    </div>
  )
}

function DecisionOption({ value, checked, onChange, english, arabic }: { value: string; checked: boolean; onChange: (value: string) => void; english: string; arabic: string }) {
  return (
    <label className="flex cursor-pointer items-start gap-4 border border-navy/10 p-5 transition-colors hover:border-gold/50">
      <input name="enrolmentDecision" value={value} type="radio" required checked={checked} onChange={() => onChange(value)} className="mt-1 h-4 w-4 shrink-0 accent-[#c99a67]" />
      <span className="space-y-2 text-sm font-medium leading-relaxed text-navy/75">
        <span className="block">{english}</span><span dir="rtl" className="block text-right">{arabic}</span>
      </span>
    </label>
  )
}

function NewStudentFields({ student }: { student: number }) {
  const prefix = `newStudent${student}`
  return (
    <fieldset className="border border-navy/10 bg-ivory/20 p-6 md:p-8">
      <legend className="px-3 text-lg font-bold uppercase tracking-tight text-navy">Student {student} Info <span dir="rtl" className="ml-3 text-gold">بيانات الطالب</span></legend>
      <div className="grid gap-6 md:grid-cols-2">
        <BilingualField label="Student Name & Surname (as per passport)" arabicLabel="اسم الطالب والعائلة (مطابقاً لجواز السفر)" htmlFor={`${prefix}-name`}>
          <Input id={`${prefix}-name`} name={`${prefix}Name`} maxLength={120} placeholder="Enter name" className={fieldClass} />
        </BilingualField>
        <BilingualField label="Applying for entry to Grade" arabicLabel="متقدم إلى التسجيل في الصف" htmlFor={`${prefix}-grade`}>
          <Input id={`${prefix}-grade`} name={`${prefix}Grade`} maxLength={40} placeholder="Enter Grade" className={fieldClass} />
        </BilingualField>
      </div>
      <div className="mt-6">
        <p className="mb-1 text-xs font-bold uppercase tracking-wider text-navy">Date of Birth (dd/mm/yy)</p>
        <p dir="rtl" className="mb-3 text-right text-xs font-bold text-gold">تاريخ الميلاد (اليوم / الشهر / السنة)</p>
        <div className="grid gap-4 sm:grid-cols-3">
          <SelectField label="Day" name={`${prefix}Day`} options={days} placeholder="Select day" />
          <SelectField label="Month" name={`${prefix}Month`} options={months} placeholder="Select month" />
          <SelectField label="Year" name={`${prefix}Year`} options={years} placeholder="Select year" />
        </div>
      </div>
      <div className="mt-6">
        <p className="mb-3 flex justify-between text-xs font-bold uppercase tracking-wider text-navy"><span>Gender</span><span dir="rtl" className="text-gold">الجنس</span></p>
        <div className="flex flex-wrap gap-6 text-sm font-medium text-navy/75">
          <label className="flex items-center gap-2"><input type="radio" name={`${prefix}Gender`} value="Male" className="accent-[#c99a67]" /> Male ذكر</label>
          <label className="flex items-center gap-2"><input type="radio" name={`${prefix}Gender`} value="Female" className="accent-[#c99a67]" /> Female أنثى</label>
        </div>
      </div>
    </fieldset>
  )
}

function SelectField({ label, name, options, placeholder }: { label: string; name: string; options: string[]; placeholder: string }) {
  return (
    <label className="space-y-2 text-xs font-bold uppercase tracking-wider text-navy">
      <span>{label}</span>
      <select name={name} className={selectClass} defaultValue="">
        <option value="">{placeholder}</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}
