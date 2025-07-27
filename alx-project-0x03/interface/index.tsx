export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor?: string; // optional
}
interface LayoutProps {
  children: ReactNode;
}