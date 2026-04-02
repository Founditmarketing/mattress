import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Moon, ThermometerSun, Bed } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

const questions = [
  {
    id: 'position',
    title: "How do you usually sleep?",
    icon: <Moon className="w-6 h-6 text-red-500" />,
    options: [
      { label: "Side Sleeper", value: "side" },
      { label: "Back Sleeper", value: "back" },
      { label: "Stomach Sleeper", value: "stomach" },
      { label: "Toss & Turn (All)", value: "combo" }
    ]
  },
  {
    id: 'temperature',
    title: "Do you sleep hot?",
    icon: <ThermometerSun className="w-6 h-6 text-red-500" />,
    options: [
      { label: "Yes, I wake up sweating", value: "hot" },
      { label: "Sometimes, but mostly fine", value: "neutral" },
      { label: "No, I usually sleep cold", value: "cold" }
    ]
  },
  {
    id: 'feel',
    title: "What is your preferred mattress feel?",
    icon: <Bed className="w-6 h-6 text-red-500" />,
    options: [
      { label: "Soft & Plush (Cloud-like)", value: "plush" },
      { label: "Medium (Best of both)", value: "medium" },
      { label: "Firm (Supportive)", value: "firm" }
    ]
  }
];

export const QuizPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();
  const { products } = useInventory();

  const handleSelect = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setIsAnalyzing(true);
      // Simulate analysis
      setTimeout(() => {
        setStep(step + 1); // Move to results step
        setIsAnalyzing(false);
      }, 2000);
    }
  };

  const currentQuestion = questions[step];

  // Very basic mock matching logic based on options selected
  const getRecommendations = () => {
    let matches = [...products];
    
    // Example logic
    if (answers.feel === 'plush') {
      matches = matches.filter(p => p.type.toLowerCase().includes('hybrid') || p.name.includes('Tempur'));
    } else if (answers.feel === 'firm') {
      matches = matches.filter(p => !p.type.toLowerCase().includes('soft'));
    }

    if (answers.temperature === 'hot') {
      matches = matches.sort((a, b) => b.name.includes('Breeze') ? 1 : -1); 
    }

    return matches.slice(0, 2); // Return top 2
  };

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl">
        <button 
          onClick={() => navigate(-1)} 
          className="mb-8 text-slate-500 hover:text-slate-900 flex items-center gap-2 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] overflow-hidden border border-slate-100 min-h-[500px] flex flex-col relative">
          
          {/* Progress Bar */}
          {!isAnalyzing && step < questions.length && (
            <div className="w-full h-1 bg-slate-100">
              <motion.div 
                className="h-full bg-red-500"
                initial={{ width: `${(step / questions.length) * 100}%` }}
                animate={{ width: `${((step + 1) / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          )}

          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="text-center"
                >
                  <div className="relative w-24 h-24 mx-auto mb-8">
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-red-500 rounded-full border-t-transparent animate-spin"></div>
                    <Bed className="absolute inset-0 m-auto w-8 h-8 text-red-500 animate-pulse" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Analyzing your sleep preferences...</h2>
                  <p className="text-slate-500">Matching you with our premium inventory in Gulf Shores.</p>
                </motion.div>
              ) : step < questions.length ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-xl mx-auto"
                >
                  <div className="flex items-center gap-3 mb-8 justify-center">
                    <div className="bg-red-100 p-3 rounded-2xl">
                        {currentQuestion.icon}
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center leading-tight">
                    {currentQuestion.title}
                  </h2>
                  
                  <div className="space-y-4">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleSelect(currentQuestion.id, option.value)}
                        className={`w-full p-5 rounded-2xl border-2 text-left flex items-center justify-between transition-all duration-300 ${
                          answers[currentQuestion.id] === option.value 
                            ? 'border-red-500 bg-red-50/50 shadow-md' 
                            : 'border-slate-100 hover:border-red-200 hover:bg-slate-50'
                        }`}
                      >
                        <span className={`font-bold text-lg ${answers[currentQuestion.id] === option.value ? 'text-red-700' : 'text-slate-700'}`}>
                          {option.label}
                        </span>
                        {answers[currentQuestion.id] === option.value && (
                          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                            <CheckCircle2 className="w-6 h-6 text-red-500" />
                          </motion.div>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="mt-12 flex justify-between items-center">
                    <button 
                       onClick={() => setStep(Math.max(0, step - 1))}
                       className={`text-slate-400 hover:text-slate-700 font-medium transition-colors ${step === 0 ? 'invisible' : ''}`}
                    >
                      Previous
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!answers[currentQuestion.id]}
                      className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all"
                    >
                      {step === questions.length - 1 ? 'See Results' : 'Next Step'} <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 font-bold mb-4">
                      <CheckCircle2 className="w-5 h-5" /> Perfect Matches Found
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Here is your perfect sleep.</h2>
                    <p className="text-slate-600 max-w-md mx-auto">Based on your answers, these models are in stock today and perfectly suited for your body type and preferences.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {getRecommendations().map(product => (
                      <div key={product.id} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 relative overflow-hidden group">
                        <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm">
                          98% Match
                        </div>
                        <img src={product.image} alt={product.name} className="w-full aspect-video object-cover rounded-xl mb-6 shadow-sm group-hover:scale-105 transition-transform duration-500" />
                        <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                        <p className="text-slate-500 text-sm mb-4">{product.type}</p>
                        <button className="w-full bg-slate-900 hover:bg-red-500 text-white font-bold py-3 rounded-lg transition-colors">
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 text-center">
                    <p className="text-slate-500 text-sm mb-4">Want to try them in person?</p>
                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-red-500/20 transition-all mx-auto flex items-center gap-2">
                       Get Directions to Showroom <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
