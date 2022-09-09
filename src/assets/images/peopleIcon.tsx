import * as React from "react";
import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h27v31H0z" />
    <defs>
      <pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#b" transform="scale(.03704 .03226)" />
      </pattern>
      <image
        id="b"
        width={27}
        height={31}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAfCAYAAAAWRbZDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGMSURBVHgBvZaBVYMwEIb/uoCMcE5gR2CEbtBsYDcoG9QN0A3coN1AnQCcoHUCzdE7CAglCeD33r0rvCSXC3d/CviRWNtbO1o7W/sRz88GM/LkBBiywhphIntnQc4ixTVLyOJGAmmma0SycQLtRsY+OwEJEeiOM8/xRxmfIxDNqgiYQ2iyS/oG3A1MTMW/wp/S2kkCpQgI9ij+A2F8iicEBLsgDp0XdIxf4glhRJ2IQdNbvhCaVqGAedUxqGpsPeccEFn6zA7+yuAqDSGSF2eRvGehFE0z+yjNKBnaosuZFmiLM/82mAnCNcuu+heymcRnkRXCIfEXxPdjfUGqABfw3LGDQftKMn2DyNo7/n4bQnwwtUN3UI4mmxTTSSSwfuO6Sgkz9MgAelWd9YWRF29YBq0BYiEmeRl6nfii6645WOzd5cu3+ISDaXlH98wIpfgqMxXZpTIrxd//Z2ZVgejDBsuw1aCsjdxw2uVc/nNmSGhE4kFfZrj9X36K1dfPqrMLLpZQ8b0Fn9JJPH4BHnecXC/7aPoAAAAASUVORK5CYII="
      />
    </defs>
  </svg>
);

export default SvgComponent;
