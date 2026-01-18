// lib/server-messages.ts - Server-side message resolution for optimal performance
import type { Locale } from '@/lib/i18n-config'

const messages = {
  en: {
    // Hero Section
    'hero.title': 'Create Your Child\'s Personalized Coloring Story',
    'hero.subtitle': 'A personalized, printable coloring storybook created just for your child. Receive one illustration each day that continues their unique story.',
    'hero.cta': 'Start Creating',
    'hero.subtext': 'No credit card needed · Start in under 2 minutes',
    'hero.altText': 'Child coloring their personalized storybook',
    
    // Problem Section
    'problem.title': 'The Struggle Every Parent Knows',
    'problem.subtitle': 'Finding engaging, screen-free activities that actually hold your child\'s attention',
    'problem.screenTime.title': 'Too Much Screen Time',
    'problem.screenTime.description': 'Children spend over 7 hours daily on devices, impacting creativity and focus.',
    'problem.generic.title': 'Generic Content Fails',
    'problem.generic.description': 'Standard coloring books lose their appeal quickly and don\'t inspire lasting engagement.',
    'problem.time.title': 'Parents Lack Time',
    'problem.time.description': 'Busy schedules make it hard to find and create meaningful activities for kids.',
    
    // Solution Section
    'solution.title': 'The Perfect Solution',
    'solution.subtitle': 'Personalized coloring stories that grow with your child\'s imagination',
    'solution.day1': 'Your child becomes the hero of their story',
    'solution.day2': 'New adventures unfold with each page', 
    'solution.day3': 'Characters learn and grow together',
    'solution.day7': 'A complete personalized adventure book',
    
    // How It Works Section
    'works.title': 'How It Works',
    'works.subtitle': 'Simple steps to create lasting memories',
    'works.step1.title': 'Tell Us About Your Child',
    'works.step1.description': 'Share their interests, favorite activities, and personality traits',
    'works.step2.title': 'We Create Their Story',
    'works.step2.description': 'Our AI crafts a personalized adventure where your child is the hero',
    'works.step3.title': 'Receive Daily Pages',
    'works.step3.description': 'Get new coloring pages delivered to continue the adventure',
    'works.step4.title': 'Print & Color Together',
    'works.step4.description': 'Create beautiful memories as your child brings their story to life',
    
    // Pricing Section
    'pricing.title': 'Choose Your Adventure',
    'pricing.subtitle': 'Flexible plans that grow with your family',
    'pricing.monthly': 'Monthly',
    'pricing.annual': 'Annual',
    'pricing.save': 'Save 20%',
    'pricing.cta': 'Get Started',
    'pricing.popular': 'Most Popular',
    'pricing.perMonth': '/month',
    'pricing.footer': 'All plans include free shipping and 30-day money-back guarantee',
    'pricing.free.name': 'Explorer',
    'pricing.free.price': '$0',
    'pricing.free.description': 'Perfect for trying out personalized stories',
    'pricing.free.feature1': '1 personalized story',
    'pricing.free.feature2': 'Basic customization',
    'pricing.free.feature3': 'PDF download',
    'pricing.free.cta': 'Start Free',
    'pricing.artist.name': 'Artist',
    'pricing.artist.price': '$9.99',
    'pricing.artist.description': 'Great for regular creative activities',
    'pricing.artist.feature1': '5 personalized stories',
    'pricing.artist.feature2': 'Advanced customization',
    'pricing.artist.feature3': 'Priority support',
    'pricing.artist.feature4': 'Educational activities',
    'pricing.artist.cta': 'Choose Artist',
    'pricing.pro.name': 'Creator',
    'pricing.pro.price': '$19.99',
    'pricing.pro.description': 'Perfect for families with multiple children',
    'pricing.pro.feature1': 'Unlimited stories',
    'pricing.pro.feature2': 'Full customization',
    'pricing.pro.feature3': '24/7 support',
    'pricing.pro.feature4': 'Family sharing',
    'pricing.pro.feature5': 'Early access features',
    'pricing.pro.cta': 'Go Pro',
    
    // Benefits Section
    'benefits.title': 'Why Personalized Stories Work Better',
    'benefits.subtitle': 'Research-proven benefits that make a difference',
    'benefits.bonding.title': 'Strengthens Parent-Child Bond',
    'benefits.bonding.description': 'Shared coloring time creates meaningful connections and lasting memories',
    'benefits.creativity.title': 'Boosts Creative Expression',
    'benefits.creativity.description': 'Children express themselves more freely in stories where they are the hero',
    'benefits.ritual.title': 'Establishes Healthy Routines',
    'benefits.ritual.description': 'Regular coloring time becomes a cherished daily ritual away from screens',
    'benefits.keepsake.title': 'Creates Lasting Keepsakes',
    'benefits.keepsake.description': 'Each finished story becomes a treasured family memory to keep forever',
    
    // Trust Section
    'trust.title': 'Trusted by Families Worldwide',
    'trust.subtitle': 'Join thousands of parents creating magical moments',
    'trust.privacy.title': 'Privacy & Security',
    'trust.privacy.description': '100% child-safe content with strict privacy protections',
    'trust.simple.title': 'Super Simple',
    'trust.simple.description': 'Just a few clicks to create your child\'s perfect story',
    'trust.ageAppropriate.title': 'Age-Appropriate',
    'trust.ageAppropriate.description': 'Carefully curated content for different age groups',
    
    // Final CTA
    'finalCta.title': 'Ready to Create Magic?',
    'finalCta.subtitle': 'Start your child\'s personalized coloring adventure today',
    'finalCta.button': 'Begin Your Story',
    'finalCta.subtext': 'No commitment required • Cancel anytime',
    
    // Example Use Case
    'example.title': 'Real Stories, Real Results',
    'example.quote1': 'My daughter Emma was glued to her tablet until we discovered these personalized stories.',
    'example.quote2': 'Now she spends hours coloring her own adventures!',
    'example.quote3': 'Every morning she asks "What happens next in my story?" It\'s become our special bonding time.',
    'example.quote4': 'The personalized characters and storylines keep her engaged in ways generic coloring books never could.',
    'example.attribution': 'Sarah M., Mother of 5-year-old Emma'
  },
  es: {
    // Hero Section
    'hero.title': 'Crea la Historia Personalizada de Colorear de tu Hijo',
    'hero.subtitle': 'Un libro de historias personalizado para colorear, creado especialmente para tu hijo. Recibe una ilustración cada día que continúa su historia única.',
    'hero.cta': 'Comenzar a Crear',
    'hero.subtext': 'No se necesita tarjeta de crédito · Comienza en menos de 2 minutos',
    'hero.altText': 'Niño coloreando su libro de historias personalizado',
    
    // Problem Section
    'problem.title': 'La Lucha que Todo Padre Conoce',
    'problem.subtitle': 'Encontrar actividades atractivas sin pantallas que realmente mantengan la atención de tu hijo',
    'problem.screenTime.title': 'Demasiado Tiempo de Pantalla',
    'problem.screenTime.description': 'Los niños pasan más de 7 horas diarias en dispositivos, impactando creatividad y concentración.',
    'problem.generic.title': 'El Contenido Genérico Falla',
    'problem.generic.description': 'Los libros para colorear estándar pierden su atractivo rápidamente y no inspiran compromiso duradero.',
    'problem.time.title': 'Los Padres Carecen de Tiempo',
    'problem.time.description': 'Los horarios ocupados hacen difícil encontrar y crear actividades significativas para niños.',
    
    // Solution Section
    'solution.title': 'La Solución Perfecta',
    'solution.subtitle': 'Historias de colorear personalizadas que crecen con la imaginación de tu hijo',
    'solution.day1': 'Tu hijo se convierte en el héroe de su historia',
    'solution.day2': 'Nuevas aventuras se desarrollan con cada página',
    'solution.day3': 'Los personajes aprenden y crecen juntos',
    'solution.day7': 'Un libro de aventuras personalizado completo',
    
    // Benefits Section
    'benefits.title': 'Por Qué las Historias Personalizadas Funcionan Mejor',
    'benefits.subtitle': 'Beneficios respaldados por la ciencia que marcan la diferencia',
    'benefits.bonding.title': 'Fortalece el Vínculo Padre-Hijo',
    'benefits.bonding.description': 'El tiempo compartido coloreando crea conexiones significativas y recuerdos duraderos',
    'benefits.creativity.title': 'Potencia la Expresión Creativa',
    'benefits.creativity.description': 'Los niños se expresan más libremente en historias donde son los héroes',
    'benefits.ritual.title': 'Establece Rutinas Saludables',
    'benefits.ritual.description': 'El tiempo regular de colorear se convierte en un ritual diario querido lejos de las pantallas',
    'benefits.keepsake.title': 'Crea Recuerdos Duraderos',
    'benefits.keepsake.description': 'Cada historia terminada se convierte en un tesoro familiar para conservar para siempre',
    
    // How It Works Section
    'works.title': 'Cómo Funciona',
    'works.subtitle': 'Pasos simples para crear recuerdos duraderos',
    'works.step1.title': 'Cuéntanos sobre tu Hijo',
    'works.step1.description': 'Comparte sus intereses, actividades favoritas y rasgos de personalidad',
    'works.step2.title': 'Creamos su Historia',
    'works.step2.description': 'Nuestra IA crea una aventura personalizada donde tu hijo es el héroe',
    'works.step3.title': 'Recibe Páginas Diarias',
    'works.step3.description': 'Recibe nuevas páginas para colorear entregadas para continuar la aventura',
    'works.step4.title': 'Imprime y Colorea Juntos',
    'works.step4.description': 'Crea hermosos recuerdos mientras tu hijo da vida a su historia',
    
    // Pricing Section
    'pricing.title': 'Elige Tu Aventura',
    'pricing.subtitle': 'Planes flexibles que crecen con tu familia',
    'pricing.monthly': 'Mensual',
    'pricing.annual': 'Anual',
    'pricing.save': 'Ahorra 20%',
    'pricing.cta': 'Comenzar',
    'pricing.popular': 'Más Popular',
    'pricing.perMonth': '/mes',
    'pricing.footer': 'Todos los planes incluyen envío gratuito y garantía de devolución de 30 días',
    'pricing.free.name': 'Explorador',
    'pricing.free.price': '$0',
    'pricing.free.description': 'Perfecto para probar historias personalizadas',
    'pricing.free.feature1': '1 historia personalizada',
    'pricing.free.feature2': 'Personalización básica',
    'pricing.free.feature3': 'Descarga PDF',
    'pricing.free.cta': 'Comenzar Gratis',
    'pricing.artist.name': 'Artista',
    'pricing.artist.price': '$9.99',
    'pricing.artist.description': 'Genial para actividades creativas regulares',
    'pricing.artist.feature1': '5 historias personalizadas',
    'pricing.artist.feature2': 'Personalización avanzada',
    'pricing.artist.feature3': 'Soporte prioritario',
    'pricing.artist.feature4': 'Actividades educativas',
    'pricing.artist.cta': 'Elegir Artista',
    'pricing.pro.name': 'Creador',
    'pricing.pro.price': '$19.99',
    'pricing.pro.description': 'Perfecto para familias con múltiples niños',
    'pricing.pro.feature1': 'Historias ilimitadas',
    'pricing.pro.feature2': 'Personalización completa',
    'pricing.pro.feature3': 'Soporte 24/7',
    'pricing.pro.feature4': 'Compartir familia',
    'pricing.pro.feature5': 'Acceso anticipado a funciones',
    'pricing.pro.cta': 'Hacerse Pro',
    
    // Trust Section
    'trust.title': 'Confiado por Familias en Todo el Mundo',
    'trust.subtitle': 'Únete a miles de padres creando momentos mágicos',
    'trust.privacy.title': 'Privacidad & Seguridad',
    'trust.privacy.description': 'Contenido 100% seguro para niños con protecciones de privacidad estrictas',
    'trust.simple.title': 'Súper Simple',
    'trust.simple.description': 'Solo unos pocos clics para crear la historia perfecta de tu hijo',
    'trust.ageAppropriate.title': 'Apropiado para la Edad',
    'trust.ageAppropriate.description': 'Contenido cuidadosamente curado para diferentes grupos de edad',
    
    // Final CTA
    'finalCta.title': '¿Listo para Crear Magia?',
    'finalCta.subtitle': 'Comienza la aventura de colorear personalizada de tu hijo hoy',
    'finalCta.button': 'Comenzar Tu Historia',
    'finalCta.subtext': 'Sin compromiso requerido • Cancela en cualquier momento',
    
    // Example Use Case
    'example.title': 'Historias Reales, Resultados Reales',
    'example.quote1': 'Mi hija Emma estaba pegada a su tablet hasta que descubrimos estas historias personalizadas.',
    'example.quote2': '¡Ahora pasa horas coloreando sus propias aventuras!',
    'example.quote3': 'Cada mañana pregunta "¿Qué pasa después en mi historia?" Se ha convertido en nuestro tiempo especial de conexión.',
    'example.quote4': 'Los personajes e historias personalizadas la mantienen comprometida de maneras que los libros genéricos nunca podrían.',
    'example.attribution': 'Sarah M., Madre de Emma de 5 años'
  },
  it: {
    // Hero Section
    'hero.title': 'Crea la Storia da Colorare Personalizzata di tuo Figlio',
    'hero.subtitle': 'Un libro da colorare personalizzato creato appositamente per tuo figlio. Ricevi un\'illustrazione ogni giorno che continua la sua storia unica.',
    'hero.cta': 'Inizia a Creare',
    'hero.subtext': 'Non è necessaria la carta di credito · Inizia in meno di 2 minuti',
    'hero.altText': 'Bambino che colora il suo libro di storie personalizzato',
    
    // Problem Section
    'problem.title': 'La Lotta che Ogni Genitore Conosce',
    'problem.subtitle': 'Trovare attività coinvolgenti senza schermi che catturino davvero l\'attenzione di tuo figlio',
    'problem.screenTime.title': 'Troppo Tempo davanti agli Schermi',
    'problem.screenTime.description': 'I bambini trascorrono oltre 7 ore al giorno sui dispositivi, impattando creatività e concentrazione.',
    'problem.generic.title': 'I Contenuti Generici Falliscono',
    'problem.generic.description': 'I libri da colorare standard perdono rapidamente il loro fascino e non ispirano coinvolgimento duraturo.',
    'problem.time.title': 'I Genitori Mancano di Tempo',
    'problem.time.description': 'Gli orari impegnativi rendono difficile trovare e creare attività significative per i bambini.',
    
    // Solution Section
    'solution.title': 'La Soluzione Perfetta',
    'solution.subtitle': 'Storie da colorare personalizzate che crescono con l\'immaginazione di tuo figlio',
    'solution.day1': 'Tuo figlio diventa l\'eroe della sua storia',
    'solution.day2': 'Nuove avventure si sviluppano con ogni pagina',
    'solution.day3': 'I personaggi imparano e crescono insieme',
    'solution.day7': 'Un libro di avventure personalizzato completo',
    
    // Benefits Section
    'benefits.title': 'Perché le Storie Personalizzate Funzionano Meglio',
    'benefits.subtitle': 'Benefici scientificamente provati che fanno la differenza',
    'benefits.bonding.title': 'Rafforza il Legame Genitore-Figlio',
    'benefits.bonding.description': 'Il tempo condiviso colorando crea connessioni significative e ricordi duraturi',
    'benefits.creativity.title': 'Potenzia l\'Espressione Creativa',
    'benefits.creativity.description': 'I bambini si esprimono più liberamente nelle storie dove sono gli eroi',
    'benefits.ritual.title': 'Stabilisce Routine Salutari',
    'benefits.ritual.description': 'Il tempo regolare di colorazione diventa un rituale quotidiano amato lontano dagli schermi',
    'benefits.keepsake.title': 'Crea Ricordi Duraturi',
    'benefits.keepsake.description': 'Ogni storia completata diventa un tesoro di famiglia da conservare per sempre',
    
    // How It Works Section
    'works.title': 'Come Funziona',
    'works.subtitle': 'Passaggi semplici per creare ricordi duraturi',
    'works.step1.title': 'Parlaci di Tuo Figlio',
    'works.step1.description': 'Condividi i suoi interessi, attività preferite e tratti della personalità',
    'works.step2.title': 'Creiamo la Sua Storia',
    'works.step2.description': 'La nostra AI crea un\'avventura personalizzata dove tuo figlio è l\'eroe',
    'works.step3.title': 'Ricevi Pagine Quotidiane',
    'works.step3.description': 'Ricevi nuove pagine da colorare consegnate per continuare l\'avventura',
    'works.step4.title': 'Stampa e Colora Insieme',
    'works.step4.description': 'Crea bei ricordi mentre tuo figlio dà vita alla sua storia',
    
    // Pricing Section
    'pricing.title': 'Scegli la Tua Avventura',
    'pricing.subtitle': 'Piani flessibili che crescono con la tua famiglia',
    'pricing.monthly': 'Mensile',
    'pricing.annual': 'Annuale',
    'pricing.save': 'Risparmia 20%',
    'pricing.cta': 'Inizia',
    'pricing.popular': 'Più Popolare',
    'pricing.perMonth': '/mese',
    'pricing.footer': 'Tutti i piani includono spedizione gratuita e garanzia di rimborso di 30 giorni',
    'pricing.free.name': 'Esploratore',
    'pricing.free.price': '$0',
    'pricing.free.description': 'Perfetto per provare storie personalizzate',
    'pricing.free.feature1': '1 storia personalizzata',
    'pricing.free.feature2': 'Personalizzazione di base',
    'pricing.free.feature3': 'Download PDF',
    'pricing.free.cta': 'Inizia Gratis',
    'pricing.artist.name': 'Artista',
    'pricing.artist.price': '$9.99',
    'pricing.artist.description': 'Ottimo per attività creative regolari',
    'pricing.artist.feature1': '5 storie personalizzate',
    'pricing.artist.feature2': 'Personalizzazione avanzata',
    'pricing.artist.feature3': 'Supporto prioritario',
    'pricing.artist.feature4': 'Attività educative',
    'pricing.artist.cta': 'Scegli Artista',
    'pricing.pro.name': 'Creatore',
    'pricing.pro.price': '$19.99',
    'pricing.pro.description': 'Perfetto per famiglie con più bambini',
    'pricing.pro.feature1': 'Storie illimitate',
    'pricing.pro.feature2': 'Personalizzazione completa',
    'pricing.pro.feature3': 'Supporto 24/7',
    'pricing.pro.feature4': 'Condivisione famiglia',
    'pricing.pro.feature5': 'Accesso anticipato alle funzionalità',
    'pricing.pro.cta': 'Diventa Pro',
    
    // Trust Section
    'trust.title': 'Fidato dalle Famiglie in Tutto il Mondo',
    'trust.subtitle': 'Unisciti a migliaia di genitori che creano momenti magici',
    'trust.privacy.title': 'Privacy e Sicurezza',
    'trust.privacy.description': 'Contenuto 100% sicuro per bambini con rigide protezioni della privacy',
    'trust.simple.title': 'Super Semplice',
    'trust.simple.description': 'Solo pochi clic per creare la storia perfetta di tuo figlio',
    'trust.ageAppropriate.title': 'Adatto all\'Età',
    'trust.ageAppropriate.description': 'Contenuto attentamente curato per diverse fasce d\'età',
    
    // Final CTA
    'finalCta.title': 'Pronto a Creare Magia?',
    'finalCta.subtitle': 'Inizia oggi l\'avventura da colorare personalizzata di tuo figlio',
    'finalCta.button': 'Inizia la Tua Storia',
    'finalCta.subtext': 'Nessun impegno richiesto • Cancella in qualsiasi momento',
    
    // Example Use Case
    'example.title': 'Storie Reali, Risultati Reali',
    'example.quote1': 'Mia figlia Emma era attaccata al suo tablet fino a quando abbiamo scoperto queste storie personalizzate.',
    'example.quote2': 'Ora trascorre ore a colorare le sue avventure!',
    'example.quote3': 'Ogni mattina chiede "Cosa succede dopo nella mia storia?" È diventato il nostro momento speciale di connessione.',
    'example.quote4': 'I personaggi personalizzati e le storie la tengono coinvolta in modi che i libri da colorare generici non potrebbero mai fare.',
    'example.attribution': 'Sarah M., Madre di Emma di 5 anni'
  }
}

export function getServerMessages(locale: Locale, key: string): string {
  return messages[locale]?.[key] || key
}