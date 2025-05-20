const About = () => {

 return (

<div className="space-y-24 bg-gray-50 text-gray-800">

  {/* Section A (Image - Optional) */}
 <div className="w-full">
 {/* <img src={img} alt="About" className="w-full h-auto object-cover rounded-lg shadow-md" /> */}

 </div>



  {/* Section B */}

<div className="px-4 md:px-20 space-y-6 text-center bg-white py-12 shadow-inner rounded-lg">
 <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
 Pharma team helps you get your life back on track.
 </h1>
 <p className="text-gray-700 text-lg max-w-3xl mx-auto">

Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue — including your work and home stressors.

 </p>

 </div>


 {/* Section D */}
 <div className="px-4 md:px-20 grid md:grid-cols-2 gap-10 bg-blue-100 py-12 rounded-lg shadow-md">

 <div className="space-y-4">

  <div className="bg-blue-600 text-white px-4 py-2 inline-block rounded-md shadow-sm">THE LEADERS</div>

  <h1 className="text-3xl font-semibold text-blue-900">We have the best Pharma & Medical services</h1>

  <p className="text-gray-800 text-lg">

  Doctors are choosing from our diverse pool of health specialists. Discover better health & wellness by using our doctors within a short span of time. <br /><br />

  Once the family has reached a decision, the team informs the relevant parties so final arrangements can begin. Emergency staff are available 24 hours a day, seven days a week.

</p>

 </div>

 <div className="space-y-4">

  <div className="bg-blue-600 text-white px-4 py-2 inline-block rounded-md shadow-sm">OUR STORY</div>

 <h1 className="text-3xl font-semibold text-blue-900">Our mission is to help patients live better.</h1>

  <p className="text-gray-800 text-lg">

 Patients traveling internationally are provided timely diagnostic and specialty care in a place designed to feel a little more like home.
  </p>
 <ul className="list-disc list-inside text-gray-800">

 <li>Over 400 leading hospitals and clinics</li>

 <li>Trusted doctors across 20+ specialties</li>

 <li>Award-winning practice management</li>

</ul>
 </div>
</div>
{/* Section F */}

 <div className="px-4 md:px-20 text-center space-y-6 bg-white py-16 rounded-lg shadow-inner">

 <h1 className="text-3xl md:text-4xl font-bold text-blue-600">Our medical values that drive through success</h1>

  <p className="text-gray-700 text-lg max-w-3xl mx-auto">

 Our team of highly trained professionals uses the latest healing technologies to restore you to pain-free health quickly and easily. We thoroughly evaluate & treat all of the contributing root factors related to your issue — including work and home stressors.

  </p>
 </div>



 {/* Section G */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20 py-12 bg-blue-50 rounded-lg"> {[ {

title: 'Bio Technology',

desc: 'Once the family has reached a decision, the team informs the relevant parties.',

 }, {

 title: 'Vaccine',

 desc: 'Emergency staff who are available 24 hours a day, seven days a week.',
 },
 {

  title: 'Latest Technology',

 desc: 'Medical professionals team is trained to provide you with the care and support.',

  },

  {

 title: 'Expert Doctors',
 desc: 'We will fax the records directly to the doctors the day before the appointment.',
},

 ].map((item, index) => (
 <div key={index} className="bg-white shadow-lg p-6 rounded-xl text-center transition transform hover:scale-105 duration-300">

<h2 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h2>

<p className="text-gray-600">{item.desc}</p>
 </div>

))}

</div>
 </div>);

};



export default About;