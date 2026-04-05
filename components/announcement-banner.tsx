"use client"

export function AnnouncementBanner() {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee inline-block">
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
        <span className="mx-8 font-medium">|</span>
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
        <span className="mx-8 font-medium">|</span>
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
      </div>
      {/* Duplicate for seamless effect */}
      <div className="animate-marquee inline-block">
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
        <span className="mx-8 font-medium">|</span>
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
        <span className="mx-8 font-medium">|</span>
        <span className="mx-8 font-medium">School working hours: Open Sunday - Thursday, 7:30 am - 4:00 pm</span>
      </div>
    </div>
  )
}
