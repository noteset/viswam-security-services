import React, { useEffect, useState } from 'react';
import { Building2, Users2, Shield, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Building2,
    label: 'Global Locations',
    value: 150,
    suffix: '+',
    color: 'text-blue-600',
  },
  {
    icon: Users2,
    label: 'Security Personnel',
    value: 5000,
    suffix: '+',
    color: 'text-green-600',
  },
  {
    icon: Shield,
    label: 'Years of Service',
    value: 25,
    suffix: '',
    color: 'text-purple-600',
  },
  {
    icon: Trophy,
    label: 'Awards Won',
    value: 50,
    suffix: '+',
    color: 'text-yellow-600',
  },
];

const StatCard = ({ icon: Icon, label, value, suffix, color }: any) => {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const stepValue = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current > value) {
        setCount(value);
        setAnimation(true);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div
      className={`flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform ${
        animation ? 'hover:scale-105' : ''
      } transition-transform duration-300`}
    >
      <Icon className={`w-12 h-12 ${color} mb-4`} />
      <h3 className="text-4xl font-bold text-gray-900 mb-2">
        {count}
        {suffix}
      </h3>
      <p className="text-gray-600 text-center">{label}</p>
      {animation && (
        <div className="animate-pulse">
          <div className="bg-blue-600 h-2 w-2/3 rounded-full mb-2"></div>
          <div className="bg-blue-600 h-2 w-1/2 rounded-full"></div>
        </div>
      )}
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;


