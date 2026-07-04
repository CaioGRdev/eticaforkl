export default function AboutSection() {
  return (
    <section className="bg-[#F4F6F9] py-20 px-6 md:px-16 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="text-[#001552]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
          </div>
          <h3 className="text-[#001552] text-xl font-black">+80 consultores</h3>
          <p className="text-gray-500 text-sm font-medium">Alunos de engenharia UERJ.</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="text-[#001552]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
          </div>
          <h3 className="text-[#001552] text-xl font-black">6 áreas de atuação</h3>
          <p className="text-gray-500 text-sm font-medium">Soluções sob medida.</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center gap-3">
          <div className="text-[#001552]">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
          </div>
          <h3 className="text-[#001552] text-xl font-black">Preços justos</h3>
          <p className="text-gray-500 text-sm font-medium">Consultoria acessível a PMEs.</p>
        </div>

      </div>
    </section>
  );
}