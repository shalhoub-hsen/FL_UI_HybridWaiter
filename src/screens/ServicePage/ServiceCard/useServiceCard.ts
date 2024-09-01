export interface ServiceCardProps {
  Name : string;
  Description : string;
  Icon: string
}

export const useServiceCard = (props: ServiceCardProps) => {
  return {
    ...props,
  };
};