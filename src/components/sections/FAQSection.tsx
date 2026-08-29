import { useState } from 'react'
import SectionHeader from '@/components/ui/SectionHeader'
import { faqs } from '@/data/faq'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/utils/cn'

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <section className="section-padding bg-white" aria-labelledby="faq-heading">
      <div className="container-content max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Common questions about working with Corelane Systems."
        />

        <div className="space-y-3" role="list">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className="border border-slate-200 rounded-xl overflow-hidden"
                role="listitem"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left
                    hover:bg-slate-50 transition-colors duration-150"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="font-semibold text-slate-800 text-sm leading-snug pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      'flex-shrink-0 text-slate-400 transition-transform duration-200',
                      isOpen && 'rotate-180 text-teal'
                    )}
                    aria-hidden
                  />
                </button>

                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  className={cn(
                    'overflow-hidden transition-all duration-300',
                    isOpen ? 'max-h-96' : 'max-h-0'
                  )}
                >
                  <p className="px-5 pb-5 text-sm text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
