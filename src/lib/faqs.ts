import { PROVIDER } from './constants';

export const faqs = [
  {
    question: 'Is the service free for me?',
    answer:
      'Yes. Support Coordination is funded through your NDIS plan. You don\'t pay us directly.',
  },
  {
    question: 'Are you NDIS registered?',
    answer:
      `Compass SC is the name of our service. It is not registered in its own name. The service is provided by ${PROVIDER.legalName} (ABN ${PROVIDER.abn}), which is a registered NDIS provider (registration number ${PROVIDER.registrationNumber}). ${PROVIDER.legalName} signs your service agreement, makes all claims and is responsible for your service. You can check this on the NDIS Commission's provider register by searching for the name or the ABN.`,
  },
  {
    question: 'Who can use your service?',
    answer:
      'NDIS participants in Melbourne and surrounds who have support coordination funding in their plan. Your funding can be NDIA-managed, plan-managed or self-managed.',
  },
  {
    question: 'What if my funding is NDIA-managed (agency-managed)?',
    answer:
      `That is fine. The service is provided by ${PROVIDER.legalName}, a registered NDIS provider, so participants with NDIA-managed funding can use it.`,
  },
  {
    question: 'Does Helix Care provide other services?',
    answer:
      `Yes. ${PROVIDER.legalName} also provides other NDIS supports, such as support workers. This is a conflict of interest, and we tell you about it openly. You are free to choose any provider for your other supports. If you ask us to suggest providers, we give you at least three options where possible, and a written conflict-of-interest declaration.`,
  },
  {
    question: 'What does a Support Coordinator do?',
    answer:
      'We help you understand your plan, connect with providers, manage your budgets, and prepare for reviews.',
  },
  {
    question: 'How quickly can I get started?',
    answer:
      'We respond within 1 business day and can typically begin within the same week.',
  },
  {
    question: 'What if I don\'t have an NDIS plan yet?',
    answer:
      'We can point you in the right direction to access the NDIS and start the process.',
  },
];
