import styles from "./AppLayout.module.scss";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};
