import React from 'react';
import { BookOpen, MessageSquare, BarChart2, Trophy, ArrowRight, Zap } from 'lucide-react';

interface HomepageProps {
  onGetStarted: () => void;
}

const features = [
  {
    icon: <MessageSquare className="w-6 h-6 text-sky-blue" />,
    title: 'AIロールプレイ',
    description: 'リアルな顧客シナリオでAIと会話練習。いつでもどこでも営業スキルを磨けます。',
  },
  {
    icon: <BarChart2 className="w-6 h-6 text-success-green" />,
    title: '詳細なフィードバック',
    description: '会話後にAIが強みと改善点を分析。客観的な視点で成長を加速させます。',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-sunshine-yellow" />,
    title: 'ケーススタディ',
    description: '実際の商談事例から学ぶ。先輩のノウハウをいつでも参照できます。',
  },
  {
    icon: <Trophy className="w-6 h-6 text-vivid-red" />,
    title: '成果の可視化',
    description: '練習の積み重ねをグラフで確認。モチベーションを維持しながら成長できます。',
  },
];

export default function Homepage({ onGetStarted }: HomepageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-light-gray via-white to-sky-blue/10">
      {/* Header */}
      <header className="px-6 py-5 flex items-center justify-between max-w-5xl mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-vivid-red rounded-full flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-charcoal-gray">まなびー</span>
        </div>
        <button
          onClick={onGetStarted}
          className="px-4 py-2 text-sm font-semibold text-vivid-red border border-vivid-red rounded-lg hover:bg-vivid-red hover:text-white transition-colors"
        >
          ログイン
        </button>
      </header>

      {/* Hero */}
      <section className="px-6 pt-16 pb-20 text-center max-w-3xl mx-auto">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-sky-blue bg-sky-blue/10 rounded-full mb-6">
          AI × 営業トレーニング
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-charcoal-gray leading-tight mb-6">
          営業力を、<br />
          <span className="text-vivid-red">AIと一緒に</span>鍛えよう。
        </h1>
        <p className="text-lg text-gray-500 mb-10 leading-relaxed">
          まなびーは、AIロールプレイと詳細フィードバックで<br className="hidden sm:inline" />
          あなたの営業スキルを効率よく伸ばすトレーニングアプリです。
        </p>
        <button
          onClick={onGetStarted}
          className="inline-flex items-center px-8 py-4 bg-vivid-red text-white font-bold text-lg rounded-xl hover:bg-red-600 transition-colors shadow-lg shadow-red-200"
        >
          無料で体験する
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-charcoal-gray text-center mb-12">
          まなびーでできること
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-base font-bold text-charcoal-gray mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-16 max-w-3xl mx-auto text-center">
        <div className="bg-vivid-red rounded-2xl px-8 py-10 text-white shadow-xl shadow-red-100">
          <h2 className="text-2xl font-extrabold mb-3">今すぐ始めよう</h2>
          <p className="text-red-100 mb-6 text-sm leading-relaxed">
            アカウント登録不要のデモ体験で、まなびーの機能をすぐに確認できます。
          </p>
          <button
            onClick={onGetStarted}
            className="inline-flex items-center px-6 py-3 bg-white text-vivid-red font-bold rounded-xl hover:bg-gray-50 transition-colors"
          >
            体験を始める <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-6 text-center text-xs text-gray-400">
        © 2026 まなびー. All rights reserved.
      </footer>
    </div>
  );
}
