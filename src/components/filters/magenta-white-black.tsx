"use client";

const MagentaWhiteBlack = () => {
  return (
    <svg className="block !w-auto !h-0">
      <filter
        id="magentaWhiteBlack"
        x="-10%"
        y="-10%"
        width="120%"
        height="120%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        {/* Converte para escala de cinza */}
        <feColorMatrix
          type="matrix"
          values="
            0.3 0.3 0.3 0 0
            0.3 0.3 0.3 0 0
            0.3 0.3 0.3 0 0
            0   0   0   1 0"
          in="SourceGraphic"
          result="colormatrix"
        />

        {/* Mapeia tons claros para a cor oklch(70.488% .19894 45.767) */}
        <feComponentTransfer in="colormatrix" result="componentTransfer">
          {/* Magenta branco e preto */}
          {/* <feFuncR type="table" tableValues="0.0706 1 0.9686" />
          <feFuncG type="table" tableValues="0.0706 0.1608 0.9686" />
          <feFuncB type="table" tableValues="0.0706 1 0.9686" /> */}

          <feFuncA type="table" tableValues="0 1" />
        </feComponentTransfer>
        <feBlend
          mode="normal"
          in="componentTransfer"
          in2="SourceGraphic"
          result="blend"
        />
      </filter>
    </svg>
  );
};

export default MagentaWhiteBlack;
