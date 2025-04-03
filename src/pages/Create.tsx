
import { useState } from "react";
import { PortfolioForm } from "@/components/ui/PortfolioForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Create = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  const handleFormDataSubmit = (data) => {
    setFormData(data);
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <div className="p-8 md:p-16 max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Create Your Portfolio</h1>
          <p className="text-lg opacity-75">
            Fill out the form below to create your professional portfolio. You can customize it further after creation.
          </p>
        </div>
        
        <div className="bg-[#1A0B2E] p-6 rounded-lg border border-gray-800">
          {step === 1 ? (
            <Tabs defaultValue="basic" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="basic">Basic Info</TabsTrigger>
                <TabsTrigger value="projects">Projects</TabsTrigger>
                <TabsTrigger value="experience">Experience</TabsTrigger>
              </TabsList>
              <TabsContent value="basic" className="mt-0">
                <PortfolioForm onSubmitData={handleFormDataSubmit} />
              </TabsContent>
              <TabsContent value="projects" className="mt-0">
                <PortfolioForm onSubmitData={handleFormDataSubmit} activeTab="projects" />
              </TabsContent>
              <TabsContent value="experience" className="mt-0">
                <PortfolioForm onSubmitData={handleFormDataSubmit} activeTab="experience" />
              </TabsContent>
            </Tabs>
          ) : (
            <div className="text-center py-8">
              <div className="mb-6 text-5xl text-green-500">✓</div>
              <h2 className="text-2xl font-bold mb-4">Portfolio Created Successfully!</h2>
              <p className="mb-6 opacity-80">Your professional portfolio has been created and is now live.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={`/portfolio/${formData?.id || 'demo'}`} className="bg-[#7127BA] hover:bg-[#8138d1] text-white font-semibold px-8 py-2 rounded">
                  View Your Portfolio
                </Link>
                <button onClick={() => setStep(1)} className="border border-gray-600 hover:bg-gray-800 px-8 py-2 rounded">
                  Edit Portfolio
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Create;
