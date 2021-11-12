import { ThemeProvider } from '@creditas-ui/system';
import { standard } from '@creditas-ui/themes';
import { DiscoverSection } from './components/DiscoverSection';

export const App = () => {
  return (
    <ThemeProvider theme={standard}>
      <DiscoverSection />
    </ThemeProvider>
  );
};
