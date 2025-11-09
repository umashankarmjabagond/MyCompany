export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    hp: string;
}

export interface Status {
    loading: boolean;
    ok: boolean | null;
    error: string | null;
}
export interface RootLayoutProps {
  children: React.ReactNode;
}