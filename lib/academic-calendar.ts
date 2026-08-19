export interface CalendarEvent {
  id: string
  title: string
  day: string
  month: string // Short: AUG, SEP, OCT, etc.
  monthFull: string // August 2026, September 2026, etc.
  year: string
  startDate: string // YYYY-MM-DD for sorting / comparison
  endDate: string // YYYY-MM-DD
  type: string
  category: "academic" | "holiday" | "break" | "exam" | "revision" | "observance"
  term: "Term 1" | "Term 2" | "Term 3"
  isStarred?: boolean
  description?: string
}

export const ACADEMIC_CALENDAR_2026_2027: CalendarEvent[] = [
  // August 2026
  {
    id: "aug-27-prophet-birthday",
    title: "Prophet Mohammed’s Birthday*",
    day: "27",
    month: "AUG",
    monthFull: "August 2026",
    year: "2026",
    startDate: "2026-08-27",
    endDate: "2026-08-27",
    type: "Islamic Holiday",
    category: "holiday",
    term: "Term 1",
    isStarred: true,
    description: "Official public holiday celebrating the birthday of Prophet Mohammed."
  },
  {
    id: "aug-30-term-1-g7-g12",
    title: "Start of Term 1 (G7–G12)",
    day: "30",
    month: "AUG",
    monthFull: "August 2026",
    year: "2026",
    startDate: "2026-08-30",
    endDate: "2026-08-30",
    type: "Term Start",
    category: "academic",
    term: "Term 1",
    description: "First day of academic Term 1 for Secondary students (Grades 7 to 12)."
  },
  {
    id: "aug-31-term-1-g3-g6",
    title: "Start of Term 1 (G3–G6)",
    day: "31",
    month: "AUG",
    monthFull: "August 2026",
    year: "2026",
    startDate: "2026-08-31",
    endDate: "2026-08-31",
    type: "Term Start",
    category: "academic",
    term: "Term 1",
    description: "First day of academic Term 1 for Primary students (Grades 3 to 6)."
  },

  // September 2026
  {
    id: "sep-01-term-1-kg1-g2",
    title: "Start of Term 1 (KG1–G2)",
    day: "01",
    month: "SEP",
    monthFull: "September 2026",
    year: "2026",
    startDate: "2026-09-01",
    endDate: "2026-09-01",
    type: "Term Start",
    category: "academic",
    term: "Term 1",
    description: "First day of academic Term 1 for Kindergarten & Lower Primary (KG1 to Grade 2)."
  },

  // October 2026
  {
    id: "oct-14-15-mid-term-break",
    title: "Mid Term Break (Students)",
    day: "14–15",
    month: "OCT",
    monthFull: "October 2026",
    year: "2026",
    startDate: "2026-10-14",
    endDate: "2026-10-15",
    type: "School Break",
    category: "break",
    term: "Term 1",
    description: "Mid Term 1 break for all students."
  },

  // November 2026
  {
    id: "nov-25-26-national-day",
    title: "Omani National Day Holiday*",
    day: "25–26",
    month: "NOV",
    monthFull: "November 2026",
    year: "2026",
    startDate: "2026-11-25",
    endDate: "2026-11-26",
    type: "National Holiday",
    category: "holiday",
    term: "Term 1",
    isStarred: true,
    description: "Official Sultanate of Oman 56th National Day celebrations and public holiday."
  },

  // December 2026
  {
    id: "dec-08-10-term-1-revision",
    title: "Term 1 Revision",
    day: "08–10",
    month: "DEC",
    monthFull: "December 2026",
    year: "2026",
    startDate: "2026-12-08",
    endDate: "2026-12-10",
    type: "Revision Period",
    category: "revision",
    term: "Term 1",
    description: "Dedicated revision and study sessions in preparation for Term 1 examinations."
  },
  {
    id: "dec-13-17-term-1-exams",
    title: "Term 1 Exams",
    day: "13–17",
    month: "DEC",
    monthFull: "December 2026",
    year: "2026",
    startDate: "2026-12-13",
    endDate: "2026-12-17",
    type: "Examinations",
    category: "exam",
    term: "Term 1",
    description: "End of Term 1 summative examinations and assessments across all year groups."
  },
  {
    id: "dec-17-end-of-term-1",
    title: "End of Term 1",
    day: "17",
    month: "DEC",
    monthFull: "December 2026",
    year: "2026",
    startDate: "2026-12-17",
    endDate: "2026-12-17",
    type: "Term Conclusion",
    category: "academic",
    term: "Term 1",
    description: "Official last day of classes for Term 1."
  },
  {
    id: "dec-20-31-winter-break",
    title: "Winter Break",
    day: "20–31",
    month: "DEC",
    monthFull: "December 2026",
    year: "2026",
    startDate: "2026-12-20",
    endDate: "2026-12-31",
    type: "School Break",
    category: "break",
    term: "Term 1",
    description: "School closed for the Winter holiday period."
  },

  // January 2027
  {
    id: "jan-03-start-of-term-2",
    title: "Start of Term 2",
    day: "03",
    month: "JAN",
    monthFull: "January 2027",
    year: "2027",
    startDate: "2027-01-03",
    endDate: "2027-01-03",
    type: "Term Start",
    category: "academic",
    term: "Term 2",
    description: "Classes resume for all students marking the start of academic Term 2."
  },
  {
    id: "jan-06-israa-wel-maraj",
    title: "Israa Wel Maraj*",
    day: "06",
    month: "JAN",
    monthFull: "January 2027",
    year: "2027",
    startDate: "2027-01-06",
    endDate: "2027-01-06",
    type: "Islamic Holiday",
    category: "holiday",
    term: "Term 2",
    isStarred: true,
    description: "Public holiday commemorating Al Isra'a Wal Mi'raj."
  },
  {
    id: "jan-11-sultans-accession",
    title: "Sultan’s Accession to Power*",
    day: "11",
    month: "JAN",
    monthFull: "January 2027",
    year: "2027",
    startDate: "2027-01-11",
    endDate: "2027-01-11",
    type: "National Holiday",
    category: "holiday",
    term: "Term 2",
    isStarred: true,
    description: "National holiday celebrating His Majesty the Sultan's Accession to Power."
  },

  // February 2027
  {
    id: "feb-08-ramadan-begins",
    title: "Ramadan Begins*",
    day: "08",
    month: "FEB",
    monthFull: "February 2027",
    year: "2027",
    startDate: "2027-02-08",
    endDate: "2027-02-08",
    type: "Islamic Observance",
    category: "observance",
    term: "Term 2",
    isStarred: true,
    description: "Beginning of the Holy Month of Ramadan. Adjusted school timings apply."
  },

  // March 2027
  {
    id: "mar-10-eid-al-fitr",
    title: "Eid Al Fitr*",
    day: "10",
    month: "MAR",
    monthFull: "March 2027",
    year: "2027",
    startDate: "2027-03-10",
    endDate: "2027-03-10",
    type: "Islamic Holiday",
    category: "holiday",
    term: "Term 2",
    isStarred: true,
    description: "Official public holiday celebrating Eid Al Fitr."
  },
  {
    id: "mar-11-end-of-term-2",
    title: "End of Term 2",
    day: "11",
    month: "MAR",
    monthFull: "March 2027",
    year: "2027",
    startDate: "2027-03-11",
    endDate: "2027-03-11",
    type: "Term Conclusion",
    category: "academic",
    term: "Term 2",
    description: "Last day of classes for Term 2."
  },
  {
    id: "mar-14-25-spring-break",
    title: "Spring Break",
    day: "14–25",
    month: "MAR",
    monthFull: "March 2027",
    year: "2027",
    startDate: "2027-03-14",
    endDate: "2027-03-25",
    type: "School Break",
    category: "break",
    term: "Term 2",
    description: "School closed for the Spring break vacation."
  },
  {
    id: "mar-28-start-of-term-3",
    title: "Start of Term 3",
    day: "28",
    month: "MAR",
    monthFull: "March 2027",
    year: "2027",
    startDate: "2027-03-28",
    endDate: "2027-03-28",
    type: "Term Start",
    category: "academic",
    term: "Term 3",
    description: "Classes resume for the final academic Term 3 of the school year."
  },

  // May 2027
  {
    id: "may-17-eid-al-adha",
    title: "Eid Al Adha*",
    day: "17",
    month: "MAY",
    monthFull: "May 2027",
    year: "2027",
    startDate: "2027-05-17",
    endDate: "2027-05-17",
    type: "Islamic Holiday",
    category: "holiday",
    term: "Term 3",
    isStarred: true,
    description: "Official public holiday celebrating Eid Al Adha."
  },

  // June 2027
  {
    id: "jun-06-islamic-new-year",
    title: "Islamic New Year*",
    day: "06",
    month: "JUN",
    monthFull: "June 2027",
    year: "2027",
    startDate: "2027-06-06",
    endDate: "2027-06-06",
    type: "Islamic Holiday",
    category: "holiday",
    term: "Term 3",
    isStarred: true,
    description: "Hijri Islamic New Year public holiday."
  },
  {
    id: "jun-13-15-term-3-revision",
    title: "Term 3 Revision",
    day: "13–15",
    month: "JUN",
    monthFull: "June 2027",
    year: "2027",
    startDate: "2027-06-13",
    endDate: "2027-06-15",
    type: "Revision Period",
    category: "revision",
    term: "Term 3",
    description: "Final academic year revision and examination preparation."
  },
  {
    id: "jun-16-22-term-3-exams",
    title: "Term 3 Exams",
    day: "16–22",
    month: "JUN",
    monthFull: "June 2027",
    year: "2027",
    startDate: "2027-06-16",
    endDate: "2027-06-22",
    type: "Examinations",
    category: "exam",
    term: "Term 3",
    description: "Final examinations and end-of-year assessments across all grade levels."
  },
  {
    id: "jun-22-end-of-term-3",
    title: "End of Term 3 (Students)",
    day: "22",
    month: "JUN",
    monthFull: "June 2027",
    year: "2027",
    startDate: "2027-06-22",
    endDate: "2027-06-22",
    type: "Academic Year End",
    category: "academic",
    term: "Term 3",
    description: "Final day of the academic year for students."
  }
]

/**
 * Returns upcoming events relative to a given date (defaults to current local date).
 * If no upcoming events remain (e.g. past June 2027), returns the first N events or latest events.
 */
export function getUpcomingEvents(limit: number = 4, referenceDate?: Date): CalendarEvent[] {
  const now = referenceDate || new Date()
  const todayStr = now.toISOString().split("T")[0] // "YYYY-MM-DD"

  // Filter events where endDate is today or in the future
  const upcoming = ACADEMIC_CALENDAR_2026_2027.filter(event => event.endDate >= todayStr)

  if (upcoming.length > 0) {
    return upcoming.slice(0, limit)
  }

  // Fallback: If today is before the academic year starts or after it finishes, return first N events
  return ACADEMIC_CALENDAR_2026_2027.slice(0, limit)
}

/**
 * Returns events grouped by month for full calendar breakdown.
 */
export function getEventsGroupedByMonth(): { monthName: string; events: CalendarEvent[] }[] {
  const months = [
    "August 2026",
    "September 2026",
    "October 2026",
    "November 2026",
    "December 2026",
    "January 2027",
    "February 2027",
    "March 2027",
    "April 2027",
    "May 2027",
    "June 2027",
    "July 2027"
  ]

  return months.map(m => ({
    monthName: m,
    events: ACADEMIC_CALENDAR_2026_2027.filter(e => e.monthFull === m)
  }))
}

/**
 * Returns events by term
 */
export function getEventsByTerm(term: "Term 1" | "Term 2" | "Term 3"): CalendarEvent[] {
  return ACADEMIC_CALENDAR_2026_2027.filter(e => e.term === term)
}
