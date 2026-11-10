interface HeaderProps{
    totalStudents: number
}

function Header({totalStudents}:HeaderProps) {

  return (
    <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
            <div className="flex items-center gap-3">
               
                
                 <div className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-600 font-bold text-white">SMS</div>
               <div>
                  <h1 className="text-base font-semibold leading-tight">Student Management System</h1>
                <p className="text-xs text-gray-500">Manage Your Student Efficiently</p>
               </div>
                 </div>

                 <span className="hidden text-xs text-gray-500 sm:block">
                    {totalStudents} Students Registered
                 </span>

      
    </div>

    </header>
    
  )
}

export default Header
