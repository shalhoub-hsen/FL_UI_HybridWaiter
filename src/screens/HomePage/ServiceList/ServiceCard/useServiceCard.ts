export interface ServiceCardProps {
  icon: string;
  name: string;
  description: string;
}

export const useServiceCard = (props: ServiceCardProps) => {
  return { ...props };
};
