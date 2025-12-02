import { Header,
  HeroSection,
  Footer
} from './components';
import { ThemeProvider } from './context';

function App() {
  return (
    <ThemeProvider>
      <Header />
      
      <main>
        <HeroSection />
      </main>
      
      <Footer />
    </ThemeProvider>
  )
}

export default App;
