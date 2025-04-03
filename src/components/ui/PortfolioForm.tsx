
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Trash2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  company: z.string().optional(),
  about: z.string().min(10, "About must be at least 10 characters"),
  email: z.string().email("Please enter a valid email address"),
  location: z.string().optional(),
  phone: z.string().optional(),
  imageUrl: z.string().optional(),
  skills: z.string(),
  github: z.string().optional(),
  linkedin: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
  projectsData: z.string(),
  experienceData: z.string(),
  educationData: z.string().optional(),
  theme: z.enum(["purple", "blue", "green", "dark"]),
});

type PortfolioFormData = z.infer<typeof formSchema>;

type ProjectItem = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
  github?: string;
};

type ExperienceItem = {
  icon: string;
  title: string;
  company: string;
  period: string;
  description: string;
};

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

interface PortfolioFormProps {
  onSubmitData?: (data: any) => void;
  activeTab?: string;
}

export function PortfolioForm({ onSubmitData, activeTab = "basic" }: PortfolioFormProps) {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projects, setProjects] = useState<ProjectItem[]>([
    {
      title: "Project One",
      description: "A web app for visualizing personalized data. Create and save new playlists of recommended tracks based on your existing preferences.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "",
      github: ""
    },
    {
      title: "Project Two",
      description: "A responsive web application built with React and TypeScript. Features include user authentication, data visualization, and API integration.",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "",
      github: ""
    }
  ]);

  const [experiences, setExperiences] = useState<ExperienceItem[]>([
    { 
      icon: "star", 
      title: "Front-end Developer", 
      company: "Company A",
      period: "2020 - Present",
      description: "Developed and maintained responsive web applications using React, TypeScript, and Tailwind CSS."
    },
    { 
      icon: "message-circle", 
      title: "UX Designer", 
      company: "Company B",
      period: "2018 - 2020",
      description: "Created user-centered designs and conducted usability testing to improve user experience."
    }
  ]);

  const [education, setEducation] = useState<EducationItem[]>([
    {
      institution: "University of Technology",
      degree: "Bachelor of Science in Computer Science",
      period: "2014 - 2018"
    }
  ]);

  const form = useForm<PortfolioFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      title: "",
      company: "",
      about: "",
      email: "",
      location: "",
      phone: "",
      imageUrl: "https://placehold.co/200x200/4a3b63/FFFFFF?text=Your+Photo",
      skills: "figma, react, css, html, javascript, git",
      github: "",
      linkedin: "",
      twitter: "",
      website: "",
      projectsData: JSON.stringify(projects),
      experienceData: JSON.stringify(experiences),
      educationData: JSON.stringify(education),
      theme: "purple",
    },
  });

  // Update form values when projects or experiences change
  useEffect(() => {
    form.setValue("projectsData", JSON.stringify(projects));
  }, [projects, form]);

  useEffect(() => {
    form.setValue("experienceData", JSON.stringify(experiences));
  }, [experiences, form]);

  useEffect(() => {
    form.setValue("educationData", JSON.stringify(education));
  }, [education, form]);

  const addProject = () => {
    setProjects([...projects, {
      title: "New Project",
      description: "Describe your project here",
      imageUrl: "https://placehold.co/600x300/2b0b3a/FFFFFF?text=Project+Preview",
      link: "",
      github: ""
    }]);
  };

  const updateProject = (index: number, field: keyof ProjectItem, value: string) => {
    const updatedProjects = [...projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setProjects(updatedProjects);
  };

  const removeProject = (index: number) => {
    setProjects(projects.filter((_, i) => i !== index));
  };

  const addExperience = () => {
    setExperiences([...experiences, {
      icon: "briefcase",
      title: "Job Title",
      company: "Company Name",
      period: "Start Year - End Year",
      description: "Describe your responsibilities and achievements"
    }]);
  };

  const updateExperience = (index: number, field: keyof ExperienceItem, value: string) => {
    const updatedExperiences = [...experiences];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    setExperiences(updatedExperiences);
  };

  const removeExperience = (index: number) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const addEducation = () => {
    setEducation([...education, {
      institution: "Institution Name",
      degree: "Degree Title",
      period: "Start Year - End Year"
    }]);
  };

  const updateEducation = (index: number, field: keyof EducationItem, value: string) => {
    const updatedEducation = [...education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    setEducation(updatedEducation);
  };

  const removeEducation = (index: number) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  async function onSubmit(data: PortfolioFormData) {
    setIsSubmitting(true);
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data submitted:", data);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate a unique portfolio ID (in a real app, this would come from the backend)
      const portfolioId = Math.random().toString(36).substring(2, 8);
      
      const fullData = {
        ...data,
        id: portfolioId,
        createdAt: new Date().toISOString(),
      };
      
      toast({
        title: "Portfolio created!",
        description: `Your portfolio has been created successfully.`,
      });
      
      // Pass the data to the parent component
      if (onSubmitData) {
        onSubmitData(fullData);
      } else {
        // If no callback is provided, redirect to the portfolio page
        window.location.href = `/portfolio/${portfolioId}`;
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const renderBasicInfoFields = () => (
    <div className="space-y-4">
      <h3 className="text-xl font-medium">Personal Information</h3>
      
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Full Name</FormLabel>
            <FormControl>
              <Input placeholder="Your name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="title"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Professional Title</FormLabel>
            <FormControl>
              <Input placeholder="e.g. UI/UX Designer" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="company"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Current Company (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="Company name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="about"
        render={({ field }) => (
          <FormItem>
            <FormLabel>About Me</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Write a short bio about yourself" 
                className="min-h-[100px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="location"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Location (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="e.g. New York, NY" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email Address</FormLabel>
            <FormControl>
              <Input type="email" placeholder="your.email@example.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Phone (Optional)</FormLabel>
            <FormControl>
              <Input placeholder="e.g. +1 234 567 8900" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="skills"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Skills (comma separated)</FormLabel>
            <FormControl>
              <Input placeholder="e.g. react, javascript, css" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <h3 className="text-xl font-medium pt-4">Social Links (Optional)</h3>
      
      <FormField
        control={form.control}
        name="github"
        render={({ field }) => (
          <FormItem>
            <FormLabel>GitHub</FormLabel>
            <FormControl>
              <Input placeholder="https://github.com/yourusername" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="linkedin"
        render={({ field }) => (
          <FormItem>
            <FormLabel>LinkedIn</FormLabel>
            <FormControl>
              <Input placeholder="https://linkedin.com/in/yourusername" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="twitter"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Twitter/X</FormLabel>
            <FormControl>
              <Input placeholder="https://twitter.com/yourusername" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="website"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Personal Website</FormLabel>
            <FormControl>
              <Input placeholder="https://yourwebsite.com" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="theme"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormLabel>Select Theme</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-2"
              >
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="purple" className="bg-[#7127BA]" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Purple
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="blue" className="bg-blue-600" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Blue
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="green" className="bg-green-600" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Green
                  </FormLabel>
                </FormItem>
                <FormItem className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value="dark" className="bg-gray-800" />
                  </FormControl>
                  <FormLabel className="font-normal">
                    Dark
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );

  const renderProjectsFields = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Projects</h3>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={addProject}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> Add Project
        </Button>
      </div>
      
      {projects.map((project, index) => (
        <Card key={index} className="bg-[#1A0B2E] border border-gray-700">
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-medium">Project {index + 1}</h4>
              <Button 
                type="button" 
                variant="ghost" 
                size="sm" 
                onClick={() => removeProject(index)}
                className="text-red-500 hover:text-red-400 hover:bg-red-950"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium block mb-1">Project Title</label>
                <Input 
                  value={project.title} 
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  placeholder="Project title"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Description</label>
                <Textarea 
                  value={project.description} 
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  placeholder="Project description"
                  className="min-h-[80px]"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Live URL (Optional)</label>
                <Input 
                  value={project.link || ""} 
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                  placeholder="https://your-project.com"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">GitHub URL (Optional)</label>
                <Input 
                  value={project.github || ""} 
                  onChange={(e) => updateProject(index, 'github', e.target.value)}
                  placeholder="https://github.com/yourusername/project"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Image URL</label>
                <Input 
                  value={project.imageUrl} 
                  onChange={(e) => updateProject(index, 'imageUrl', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const renderExperienceFields = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-medium">Work Experience</h3>
        <Button 
          type="button" 
          variant="outline" 
          size="sm" 
          onClick={addExperience}
          className="flex items-center gap-1"
        >
          <Plus className="h-4 w-4" /> Add Position
        </Button>
      </div>
      
      {experiences.map((exp, index) => (
        <Card key={index} className="bg-[#1A0B2E] border border-gray-700">
          <CardContent className="p-4 space-y-4">
            <div className="flex justify-between items-start">
              <h4 className="text-lg font-medium">Position {index + 1}</h4>
              <Button 
                type="button" 
                variant="ghost" 
                size="sm" 
                onClick={() => removeExperience(index)}
                className="text-red-500 hover:text-red-400 hover:bg-red-950"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium block mb-1">Job Title</label>
                <Input 
                  value={exp.title} 
                  onChange={(e) => updateExperience(index, 'title', e.target.value)}
                  placeholder="e.g. Senior Developer"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Company</label>
                <Input 
                  value={exp.company} 
                  onChange={(e) => updateExperience(index, 'company', e.target.value)}
                  placeholder="Company name"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Time Period</label>
                <Input 
                  value={exp.period} 
                  onChange={(e) => updateExperience(index, 'period', e.target.value)}
                  placeholder="e.g. Jan 2020 - Present"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium block mb-1">Description</label>
                <Textarea 
                  value={exp.description} 
                  onChange={(e) => updateExperience(index, 'description', e.target.value)}
                  placeholder="Describe your responsibilities and achievements"
                  className="min-h-[80px]"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="mt-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Education</h3>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={addEducation}
            className="flex items-center gap-1"
          >
            <Plus className="h-4 w-4" /> Add Education
          </Button>
        </div>
        
        {education.map((edu, index) => (
          <Card key={index} className="bg-[#1A0B2E] border border-gray-700 mb-4">
            <CardContent className="p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="text-lg font-medium">Education {index + 1}</h4>
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => removeEducation(index)}
                  className="text-red-500 hover:text-red-400 hover:bg-red-950"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium block mb-1">Institution</label>
                  <Input 
                    value={edu.institution} 
                    onChange={(e) => updateEducation(index, 'institution', e.target.value)}
                    placeholder="University/School name"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Degree/Certificate</label>
                  <Input 
                    value={edu.degree} 
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="e.g. Bachelor of Computer Science"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium block mb-1">Time Period</label>
                  <Input 
                    value={edu.period} 
                    onChange={(e) => updateEducation(index, 'period', e.target.value)}
                    placeholder="e.g. 2016 - 2020"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {activeTab === "basic" && renderBasicInfoFields()}
        {activeTab === "projects" && renderProjectsFields()}
        {activeTab === "experience" && renderExperienceFields()}

        <Card className="border border-gray-700 bg-[#1A0B2E]">
          <CardContent className="p-4">
            <p className="text-sm text-gray-300">
              This form provides a comprehensive way to create your portfolio. Take your time to fill in all the sections to create a complete and professional portfolio.
            </p>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Portfolio"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
