import React from 'react';

function BigText() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="text-center p-4">
        <img 
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiluSxSPSSJA85L1gT1-kD80BN1njuHyAxB9bNFWjHAs4ZrpC0Ste8n_bDGeRUG4Ut-yo5bRsQWhon2hWpVBe_dNDQV-RVxJgg2TRCla64g_MclvRthuISLN6-l0MfLECFuwh52Q6crEeme8REr0KTp3yZHDdnpBKEB3Wskwl6kU4U51C6gZyuKAel6IKRO/s680/119ff1_351b4887148d471c85ea6e0d2e77ea06~mv2.jpg" 
          alt="Flag of Nepal" 
          className="mx-auto mb-4 w-32 h-auto"
        />
        <p className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          I am from <b>Nepal</b>, the land of <span className="text-yellow-300">Buddha</span> and the <span className="text-yellow-300">Himalayas</span>.
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 space-x-4">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/41/Swayambhunath_temple_-_an_ancient_religious_architecture_of_Nepal.jpg" 
          alt="Swayambhunath Temple" 
          className="w-64 h-auto rounded-lg shadow-lg mb-4"
        />
        <img 
          src="https://junior.scholastic.com/content/dam/classroom-magazines/junior-scholastic/issues/2023-24/120123/conquering-everest/JSC-05-120123-Everest-Everest-HR.jpg" 
          alt="Mount Everest" 
          className="w-64 h-auto rounded-lg shadow-lg mb-4"
        />
        <img 
          src="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4bf4b9a35eedbe35e99505004357d82717302971/big-96082a09652d02deecb097388d04c0fa.jpg" 
          alt="Himalayan Landscape" 
          className="w-64 h-auto rounded-lg shadow-lg mb-4"
        />
        <img 
          src="https://www.worldatlas.com/r/w1200/upload/f4/d1/88/shutterstock-304095326.jpg" 
          alt="Nepalese Mountain Range" 
          className="w-64 h-auto rounded-lg shadow-lg mb-4"
        />
      </div>
    </div>
  );
}

export default BigText;
