import { CheckIcon } from 'lucide-react';
import React from 'react'
import { twMerge } from 'tailwind-merge';


function pricing() {
    const pricingTiers = [
        {
          title: "Free Trial",
          joiningPrice: 0,
          buttonText: "Sign up now",
          popular: false,
          inverse: false,
          features: [
            "Up to 5 free interviews",
            "Limited Features",
            "Voice Feature",
            "Video feature",
          ],
        },
        {
          title: "Pro Trial",
          joiningPrice: 5 ,
          buttonText: "Sign up now",
          popular: true,
          inverse: true,
          features: [
            "20 interviews ",
            "Pro Features ",
            "Personal dashboard",
            "Voice+Video feature",
            "Priority support",
          ],
        },
        {
          title: "Premium Trial",
          joiningPrice: 15,
          buttonText: "Sign up now",
          popular: false,
          inverse: false,
          features: [
            "Unlimited Interviews",
            "Pro+Premium Features ",
            "Personal dashboard",
            "Voice+Video feature",
            "Priority support",
            "Mentor Support",
            
          ],
        },
      ];
    return (
        <section className="py-24 bg-white">
          <div className="container">
            <div className="section-heading">
            <h2 className="section-title ">Pricing</h2>
            <p className="section-description mt-5">Free for all , Pro rooms for good crowds and Expert rooms for the best crowds
    
            </p>
            </div>
            <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row  lg:items-end lg:justify-center">
          
              {pricingTiers.map(({title , joiningPrice, buttonText, popular, inverse, features}) => (
                <div className={twMerge("card", inverse === true && 'border-black bg-black text-white/60')}>
                  <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50" ,inverse === true && 'text-white/60')}>{title}</h3>
                {popular ===true &&(
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20"><span className="bg-[linear-gradient(to_right,#DD7DDF,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">Popular</span></div>
              )}
              </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-6xl font-bold tracking-tighter leading-none">{joiningPrice} $</span>
                  <span className="tracking-tight font-bold text-black/50">/month</span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>{buttonText}</button>
                <ul className="flex flex-col gap-2 mt-8">
                  {features.map((feature) => (
                    <li className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span></li>
                  ))}
                </ul>
              </div>
            ))}
        
            </div>
          </div>
        </section>
      );
}

export default pricing
