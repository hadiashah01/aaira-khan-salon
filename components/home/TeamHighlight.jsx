import React from 'react';

const teamMembers = [
  {
    name: 'Afia',
    role: 'Senior Makeup Artist',
    specialty: 'Party & Bridal Makeup',
    note: 'Highlighted by clients for precise execution and soft glam party makeup.',
  },
  {
    name: 'Saima & Sima Shah',
    role: 'Skin & Facial Specialists',
    specialty: 'Hydra Facials & Skin Polish',
    note: 'Frequently recommended for relaxing skin treatments and facial glow.',
  },
  {
    name: 'Rukhsana & Kiran',
    role: 'Hair Stylists',
    specialty: 'Hair Styling, Cuts & Protein Treatments',
    note: 'Praised for hairstyles, haircuts, and silk-finish hair treatments.',
  },
  {
    name: 'Ramsha & Eman',
    role: 'Salon Operations & Management',
    specialty: 'Client Experience & Booking',
    note: 'Recognized for warm reception, client care, and smooth coordination.',
  },
];

export const TeamHighlight = () => {
  return (
    <section className="w-full px-5 md:px-12 py-12 bg-white">
      <div className="max-w-[1380px] mx-auto space-y-6">
        <div>
          <span className="text-[11px] font-bold tracking-widest uppercase text-[#775A19]">Our Specialists</span>
          <h2 className="font-serif text-[28px] md:text-[36px] font-medium text-[#25181C] mt-0.5">
            Meet the Artists &amp; Staff Mentioned by Clients
          </h2>
          <p className="text-xs text-[#4E4639] max-w-2xl mt-1">
            Our experienced team on Main Tariq Road works together to give you a comfortable and personalized salon experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-5 rounded-xl border border-stone-200 bg-[#FFF8F8] space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#FBE2E7] flex items-center justify-center text-[#974358] font-serif font-bold text-base">
                {member.name.charAt(0)}
              </div>
              <h3 className="font-serif text-base font-semibold text-[#25181C] pt-1">{member.name}</h3>
              <p className="text-xs font-semibold text-[#775A19]">{member.role}</p>
              <p className="text-[11px] text-[#4E4639] leading-relaxed pt-1">{member.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};