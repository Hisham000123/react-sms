  
interface FooterProps{
    total:number
    active:number
    courses:number
}

function Footer({total,active,courses}:FooterProps) {   
  return (
    <footer className="border-t border-gray-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between px-6 py-4 text-xs text-gray-500">
        <span>2024 Student Management System</span>
        <span>Total : {total}| {active}| {courses}</span>
    </div>

    </footer>
  
  )
}

export default Footer

