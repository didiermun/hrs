import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Color, colorStyleType } from '../../types/icon';

export type linkProps = {
    name: string;
    to: string;
    icon: string;
    fill?: boolean;
    active?: boolean;
};
type IProps = {
    name: string;
    size?: number;
    fill?: Color;
    stroke?: Color;
    transform?: string;
    bgColor?: Color;
    useheightandpadding?: boolean;
    className?: string;
};

const iconStyle: colorStyleType = {
    primary: '#0D4B44',
    error: '#EF4444',
    warning: '#FACD23',
    main: '#FFF',
    success: '#3CD278',
    'txt-secondary': '#949ca5',
};

export type sidebarLinksProps = {
    links: linkProps[];
  };

export default function SidebarItems({ links }: sidebarLinksProps){
    let activeIndexAuto = links.findIndex((link) => location.pathname.startsWith(link.to));
    return(
        <div className="flex flex-col gap-1 pb-6 border-b border-gray-200">
            {links.map((link, i) => (
                <SidebarItem
                key={i}
                name={link.name}
                to={link.to}
                icon={link.icon}
                active={activeIndexAuto === i}
                fill={link.fill}
                />
            ))}
        </div>
    )
}

export function SidebarItem({
    name,
    to,
    icon,
    active,
    fill = true,
  }: linkProps){
    return (
        <div  className='flex gap-4 px-3 cursor-pointer py-2 border-l-4 border-primary bg-red-50'>
        <Link to={to}>
            <img src={`/icons/${name.toLocaleLowerCase()}.svg`} className="h-6" alt="logo" />
            <span className={`text-lg `+active ? 'text-secondary': ''}>{name}</span>
        </Link>
    </div>
    )
}


const StyledSVGIcon = styled(ReactSVG)`
  svg {
    ${({ size }: IProps) =>
      size &&
      css`
        width: ${size}px;
        height: ${size}px;
      `}

    ${({ transform }: IProps) =>
      transform &&
      css`
        transform: ${transform};
      `}
    path,circle {
      ${({ stroke }: IProps) =>
        stroke &&
        css`
          stroke: ${iconStyle[stroke]};
        `}
      ${({ fill }: IProps) =>
        fill &&
        css`
          fill: ${iconStyle[fill]};
        `}
    }
  }
`;

function ReactSVG(ReactSVG: any) {
    throw new Error("Function not implemented.");
}
