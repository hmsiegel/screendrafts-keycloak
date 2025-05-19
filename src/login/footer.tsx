export default function Footer() {
   return(
      <footer className="
         text-slate-200
         text-center
         text-sm
         fixed
         bottom-0
         inset-x-0
         bg-gradient-to-r
         from-#1e448b
         via-slate-500
         to-#1e448b">
         <div className="p-2">
            <p>
               &copy; {new Date().getFullYear()} Screen Drafts. All rights reserved.
            </p>
         </div>
         </footer>
   )
}