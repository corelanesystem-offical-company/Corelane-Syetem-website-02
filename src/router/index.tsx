import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from '@/layouts/RootLayout'

// Loading fallback
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-8 h-8 border-2 border-slate-200 border-t-teal rounded-full animate-spin" />
  </div>
)

// Lazy-loaded pages
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Services = lazy(() => import('@/pages/Services'))
const Industries = lazy(() => import('@/pages/Industries'))
const Locations = lazy(() => import('@/pages/Locations'))
const Process = lazy(() => import('@/pages/Process'))
const CaseStudies = lazy(() => import('@/pages/CaseStudies'))
const Blog = lazy(() => import('@/pages/Blog'))
const BlogPost = lazy(() => import('@/pages/BlogPost'))
const Contact = lazy(() => import('@/pages/Contact'))
const ThankYou = lazy(() => import('@/pages/ThankYou'))
const NotFound = lazy(() => import('@/pages/NotFound'))

// Service pages
const WebDevelopment = lazy(() => import('@/pages/services/WebDevelopment'))
const WebAppDevelopment = lazy(() => import('@/pages/services/WebAppDevelopment'))
const CustomSoftware = lazy(() => import('@/pages/services/CustomSoftware'))
const MobileDevelopment = lazy(() => import('@/pages/services/MobileDevelopment'))
const UiUxDesign = lazy(() => import('@/pages/services/UiUxDesign'))
const CloudEngineering = lazy(() => import('@/pages/services/CloudEngineering'))
const DevOps = lazy(() => import('@/pages/services/DevOps'))
const DataEngineering = lazy(() => import('@/pages/services/DataEngineering'))
const DataAnalytics = lazy(() => import('@/pages/services/DataAnalytics'))
const BusinessAutomation = lazy(() => import('@/pages/services/BusinessAutomation'))

// Industry pages
const RealEstate = lazy(() => import('@/pages/industries/RealEstate'))
const LawFirms = lazy(() => import('@/pages/industries/LawFirms'))
const Healthcare = lazy(() => import('@/pages/industries/Healthcare'))
const Ecommerce = lazy(() => import('@/pages/industries/Ecommerce'))
const ProfessionalServices = lazy(() => import('@/pages/industries/ProfessionalServices'))
const Startups = lazy(() => import('@/pages/industries/Startups'))
const Smes = lazy(() => import('@/pages/industries/Smes'))
const ArchitectureConstruction = lazy(() => import('@/pages/industries/ArchitectureConstruction'))

// Location pages
const Pakistan = lazy(() => import('@/pages/locations/Pakistan'))
const UAE = lazy(() => import('@/pages/locations/UAE'))
const UK = lazy(() => import('@/pages/locations/UK'))
const USA = lazy(() => import('@/pages/locations/USA'))
const Canada = lazy(() => import('@/pages/locations/Canada'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            {/* Core pages */}
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="process" element={<Process />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="thank-you" element={<ThankYou />} />

            {/* Services */}
            <Route path="services" element={<Services />} />
            <Route path="services/web-development" element={<WebDevelopment />} />
            <Route path="services/web-app-development" element={<WebAppDevelopment />} />
            <Route path="services/custom-software" element={<CustomSoftware />} />
            <Route path="services/mobile-development" element={<MobileDevelopment />} />
            <Route path="services/ui-ux-design" element={<UiUxDesign />} />
            <Route path="services/cloud-engineering" element={<CloudEngineering />} />
            <Route path="services/devops" element={<DevOps />} />
            <Route path="services/data-engineering" element={<DataEngineering />} />
            <Route path="services/data-analytics" element={<DataAnalytics />} />
            <Route path="services/business-automation" element={<BusinessAutomation />} />

            {/* Industries */}
            <Route path="industries" element={<Industries />} />
            <Route path="industries/real-estate" element={<RealEstate />} />
            <Route path="industries/law-firms" element={<LawFirms />} />
            <Route path="industries/healthcare" element={<Healthcare />} />
            <Route path="industries/ecommerce" element={<Ecommerce />} />
            <Route path="industries/professional-services" element={<ProfessionalServices />} />
            <Route path="industries/startups" element={<Startups />} />
            <Route path="industries/smes" element={<Smes />} />
            <Route path="industries/architecture-construction" element={<ArchitectureConstruction />} />

            {/* Locations */}
            <Route path="locations" element={<Locations />} />
            <Route path="locations/pakistan" element={<Pakistan />} />
            <Route path="locations/uae" element={<UAE />} />
            <Route path="locations/uk" element={<UK />} />
            <Route path="locations/usa" element={<USA />} />
            <Route path="locations/canada" element={<Canada />} />

            {/* Blog Post */}
            <Route path="blog/:slug" element={<BlogPost />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
