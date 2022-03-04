import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactSVG } from 'react-svg';
import { Color, colorStyleType } from '../../types/icon';

export type linkProps = {
    name: string;
    to: string;
    icon: string;
    fill?: Color;
    active?: boolean;
    size?: number;
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
    primary: '#D83A56',
    success: '#66DE93',
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
    size = 24,
    active,
    fill = 'none',
  }: linkProps){
    return (
      <Link to={to}>
        <div  className={`flex gap-4 px-3 cursor-pointer py-3  border-l-4 ${active ? 'border-primary bg-red-50':'border-transparent'}`}>
        
            {/* <img src={`/icons/${icon}.svg`} className="h-6" alt="logo" /> */}
            <StyledSVGIcon
              src={`/icons/${icon}.svg`}
              stroke={ active ? 'primary' : ''}
              // transform={transform}
              fill={active ? 'primary' : ''}
              size={size}
            />
            <span className={`text-lg font-light ${active ? 'text-secondary': ''}`}>{name}</span>
        
        </div>
    </Link>
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
