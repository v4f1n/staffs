import { FC, SVGProps, forwardRef, memo } from "react";
import * as svgIcons from "./svgs";

type iconTypes = keyof typeof svgIcons;

interface IconProps extends SVGProps<SVGSVGElement> {
  name: iconTypes;
  size?: number;
}

const IconsList = Object(svgIcons);

export const Icon = memo(
  forwardRef<SVGSVGElement, IconProps>((props, iconRef) => {
    const { name, size } = props;

    const IconComponent: FC<SVGProps<SVGSVGElement>> = IconsList[name];

    return (
      <IconComponent
        ref={iconRef}
        {...props}
        {...(size && {
          width: size,
          height: size,
        })}
      />
    );
  })
);
