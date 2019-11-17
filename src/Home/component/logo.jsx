/* eslint-disable */
import React from "react";
import TweenOne from "rc-tween-one";
import SvgDrawPlugin from "rc-tween-one/lib/plugin/SvgDrawPlugin";
TweenOne.plugins.push(SvgDrawPlugin);

const animate = {
  scale: {
    scale: 0,
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  alpha: {
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  y: {
    y: 30,
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  y2: {
    y: -30,
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  x: {
    x: 30,
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  x2: {
    x: -30,
    opacity: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  draw: {
    SVGDraw: 0,
    type: "from",
    ease: "easeOutQuad"
  },
  loop: {
    yoyo: true,
    repeat: -1,
    duration: 2500
  }
};

export default function() {
  // safari 下取不到 transform 值，，所有动画在外层增加 g 标签。
  return (
    <svg
      width="203"
      height="64"
      viewBox="0 0 203 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M73.0682 22.5907C74.132 22.5907 75.099 22.7841 75.9694 23.1387C76.8398 23.5255 77.5489 24.009 78.0647 24.5893C78.6127 25.2017 78.9995 25.8787 79.2897 26.6523C79.5798 27.426 79.7087 28.1996 79.7087 29.0055C79.7087 29.8114 79.5798 30.5851 79.2897 31.3587C78.9995 32.1324 78.5805 32.8093 78.0647 33.4218C77.5167 34.0343 76.8398 34.5178 75.9694 34.8724C75.099 35.2592 74.132 35.4204 73.0682 35.4204H67.9105V40.7715H64.4936V22.6229C65.4606 22.6229 66.879 22.6229 68.7809 22.6229C70.6828 22.5907 72.1011 22.5907 73.0682 22.5907ZM67.9105 25.8787V32.3258H73.0682C74.0997 32.3258 74.9379 32.0034 75.5181 31.3265C76.0984 30.6495 76.3885 29.9081 76.3885 29.1022C76.3885 28.2963 76.0984 27.5549 75.5181 26.878C74.9379 26.201 74.132 25.8787 73.1004 25.8787H67.9105Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M81.2883 28.0062H84.2217L84.4474 29.4891C84.8987 28.7476 85.4144 28.2641 85.9947 28.0385C86.5749 27.7806 87.2841 27.6839 88.0577 27.6839C89.4439 27.6839 90.5399 28.1029 91.3458 28.9088L89.9274 31.6488C89.2827 31.1008 88.509 30.8107 87.6387 30.8107C86.7039 30.8107 85.9624 31.0686 85.35 31.6166C84.7375 32.1324 84.4474 32.9705 84.4474 34.0665V40.836H81.2883V28.0062V28.0062Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M93.7957 29.6825C95.0206 28.3931 96.6002 27.7484 98.5988 27.7484C100.597 27.7484 102.209 28.3931 103.434 29.6825C104.659 30.9719 105.304 32.5514 105.304 34.4533C105.304 36.3552 104.691 37.9348 103.499 39.2242C102.274 40.5136 100.662 41.1261 98.631 41.1261C96.6002 41.1261 94.9884 40.4814 93.7957 39.2242C92.603 37.9348 91.9905 36.3552 91.9905 34.4533C91.9583 32.5514 92.5707 30.9397 93.7957 29.6825ZM98.631 30.6173C97.535 30.6173 96.6969 31.0041 96.0844 31.7455C95.4719 32.487 95.1496 33.3896 95.1496 34.4211C95.1496 35.4526 95.4719 36.3552 96.0844 37.0967C96.6969 37.8381 97.5672 38.1927 98.631 38.1927C99.6948 38.1927 100.565 37.8381 101.178 37.0967C101.79 36.3552 102.112 35.4849 102.112 34.4211C102.112 33.4218 101.79 32.5192 101.145 31.7778C100.468 31.0041 99.6303 30.6173 98.631 30.6173Z"
        fill="url(#paint2_linear)"
      />
      <path
        d="M108.688 29.6825C109.913 28.3931 111.493 27.7484 113.492 27.7484C115.49 27.7484 117.102 28.3931 118.327 29.6825C119.552 30.9719 120.197 32.5514 120.197 34.4533C120.197 36.3552 119.584 37.9348 118.391 39.2242C117.166 40.5136 115.555 41.1261 113.524 41.1261C111.493 41.1261 109.881 40.4814 108.688 39.2242C107.496 37.9348 106.883 36.3552 106.883 34.4533C106.883 32.5514 107.496 30.9397 108.688 29.6825ZM113.524 30.6173C112.428 30.6173 111.59 31.0041 110.977 31.7455C110.365 32.487 110.042 33.3896 110.042 34.4211C110.042 35.4526 110.365 36.3552 110.977 37.0967C111.59 37.8381 112.46 38.1927 113.524 38.1927C114.62 38.1927 115.458 37.8381 116.07 37.0967C116.683 36.3552 117.005 35.4849 117.005 34.4211C117.005 33.4218 116.683 32.5192 116.038 31.7778C115.393 31.0041 114.555 30.6173 113.524 30.6173Z"
        fill="url(#paint3_linear)"
      />
      <path
        d="M126.611 40.8037H123.452V30.9397H121.067V28.1674H123.452V27.297C123.452 25.653 123.936 24.4281 124.871 23.5577C125.806 22.6874 126.966 22.2683 128.352 22.2683C129.48 22.2683 130.609 22.6229 131.672 23.2998L130.512 25.653C129.803 25.2017 129.158 24.9761 128.578 24.9761C127.998 24.9761 127.546 25.1695 127.192 25.5563C126.837 25.9431 126.644 26.5234 126.644 27.2648V28.1352H130.415V30.9074H126.644V40.8037H126.611Z"
        fill="url(#paint4_linear)"
      />
      <path
        d="M146.791 36.1618L149.144 38.515C147.339 40.3202 145.018 41.2228 142.246 41.2228C140.602 41.2228 139.183 40.9649 137.894 40.4169C136.637 39.9011 135.605 39.1919 134.864 38.2894C134.122 37.3868 133.542 36.4197 133.155 35.3237C132.768 34.2277 132.575 33.0672 132.575 31.8422C132.575 30.6173 132.768 29.4568 133.155 28.3286C133.542 27.2003 134.122 26.1688 134.896 25.2662C135.67 24.3636 136.669 23.6222 137.958 23.0742C139.216 22.5262 140.634 22.2683 142.213 22.2683C144.792 22.2683 147.017 23.2031 148.886 25.0406L146.597 27.2648C145.437 26.1366 143.986 25.5563 142.213 25.5563C140.183 25.5563 138.603 26.1688 137.539 27.426C136.476 28.6832 135.928 30.166 135.96 31.8422C135.992 33.5507 136.508 35.0013 137.539 36.194C138.571 37.3868 140.15 37.9992 142.213 37.9992C143.019 37.9992 143.857 37.8381 144.663 37.5157C145.501 37.2256 146.211 36.7421 146.791 36.1618Z"
        fill="#606060"
      />
      <path
        d="M150.014 28.0062H152.948L153.174 29.4891C153.625 28.7476 154.141 28.2641 154.721 28.0385C155.301 27.7806 156.01 27.6839 156.784 27.6839C158.17 27.6839 159.266 28.1029 160.072 28.9088L158.654 31.6488C158.009 31.1008 157.235 30.8107 156.365 30.8107C155.43 30.8107 154.689 31.0686 154.076 31.6166C153.464 32.1324 153.174 32.9705 153.174 34.0665V40.836H150.014V28.0062Z"
        fill="#606060"
      />
      <path
        d="M174.03 35.5493H164.037C164.134 36.3552 164.52 37.0322 165.197 37.5157C165.874 38.0315 166.745 38.2571 167.841 38.2571C168.453 38.2571 169.098 38.1604 169.775 37.9348C170.42 37.7091 170.935 37.419 171.29 37.0644L173.321 39.063C172.676 39.7399 171.87 40.2557 170.839 40.6103C169.839 40.9649 168.808 41.1583 167.808 41.1583C165.616 41.1583 163.908 40.5458 162.651 39.2886C161.394 38.0637 160.781 36.3874 160.781 34.3244C160.781 32.358 161.394 30.7462 162.651 29.489C163.876 28.2319 165.552 27.6194 167.615 27.6194C169.807 27.6194 171.516 28.2963 172.676 29.6502C173.804 31.0041 174.256 32.9705 174.03 35.5493ZM164.069 32.906H170.968C170.871 32.1001 170.516 31.4876 169.936 31.0363C169.356 30.6173 168.582 30.3916 167.647 30.3916C166.777 30.3916 166.003 30.6173 165.359 31.0363C164.714 31.4876 164.295 32.1001 164.069 32.906Z"
        fill="#606060"
      />
      <path
        d="M186.602 22.6551H189.761V40.836H186.795L186.602 39.063C185.731 40.4169 184.345 41.1261 182.476 41.1261C180.541 41.1261 178.962 40.5136 177.737 39.3209C176.512 38.1282 175.867 36.4842 175.867 34.4211C175.867 32.2613 176.48 30.6173 177.673 29.4568C178.865 28.2964 180.445 27.7161 182.379 27.7161C183.12 27.7161 183.926 27.9095 184.797 28.2641C185.667 28.6509 186.247 29.1345 186.602 29.7469V22.6551ZM182.669 30.6495C181.637 30.6495 180.767 31.0041 180.058 31.6811C179.349 32.358 179.026 33.2606 179.026 34.3889C179.026 35.4849 179.381 36.3875 180.09 37.0967C180.799 37.8058 181.67 38.1604 182.669 38.1604C183.701 38.1604 184.603 37.8058 185.312 37.1289C186.022 36.4519 186.376 35.5171 186.376 34.3889C186.376 33.2929 186.022 32.3903 185.28 31.7133C184.571 31.0041 183.701 30.6495 182.669 30.6495Z"
        fill="#606060"
      />
      <path
        d="M28.6799 24.2024C28.003 25.0406 27.4228 25.9109 27.0037 26.878C28.3576 26.878 29.9049 26.878 31.6134 26.878C31.6456 26.8135 31.7101 26.749 31.7423 26.6846C32.9995 25.234 34.8047 24.4926 37.1901 24.4926C39.2532 24.4926 40.9617 25.1695 42.3156 26.4912L44.9911 23.9123C42.7991 21.7525 40.188 20.6565 37.2224 20.6565C35.3849 20.6565 33.7409 20.9789 32.2581 21.6236C30.743 22.2683 29.5503 23.1387 28.6799 24.2024Z"
        fill="#606060"
      />
      <path
        d="M30.7753 41.1906V35.5171C30.2595 34.5501 30.0016 33.5185 29.9049 32.358H25.9399C25.9722 33.6152 26.1978 34.8079 26.5847 35.9362C27.0359 37.1934 27.6806 38.3538 28.5832 39.4176C29.1957 40.0623 29.9049 40.6748 30.7753 41.1906Z"
        fill="#606060"
      />
      <path
        d="M36.1264 8.82608C23.49 8.82608 13.2391 19.1092 13.2391 31.7133C13.2391 41.9964 20.0731 50.7323 29.4536 53.6012C30.1628 53.8269 30.872 53.9881 31.6134 54.1492C32.9028 54.4071 34.2567 54.5683 35.6106 54.6005V51.7638V44.0918V42.7056V42.6734H36.4487H38.9953H41.6064C42.8636 42.6734 43.9918 42.4477 44.9911 42.0287C45.9904 41.6096 46.8286 41.0294 47.441 40.3202C48.0535 39.611 48.537 38.8374 48.8916 37.9348C49.214 37.0322 49.3752 36.1296 49.3752 35.1947C49.3752 34.2599 49.214 33.3251 48.8916 32.4547C48.5693 31.5521 48.0857 30.7462 47.441 30.0693C46.8286 29.3601 45.9904 28.8121 44.9911 28.3608C43.9918 27.9417 42.8636 27.7161 41.6064 27.7161C40.9939 27.7161 40.2525 27.7161 39.3177 27.7161C37.6092 27.7161 35.6751 27.7161 33.483 27.7161C28.68 27.7161 25.1018 27.7161 22.6841 27.7161V31.4877H31.3233H39.3177H41.6064C42.8314 31.4877 43.7662 31.8745 44.4431 32.6481C45.1201 33.4218 45.4747 34.2922 45.4747 35.227C45.4747 36.1618 45.1523 37.0322 44.4754 37.8058C44.3142 37.967 44.153 38.1282 43.9596 38.2894C43.3471 38.7407 42.5735 38.9985 41.6386 38.9985H37.8026H36.5132H36.4809H35.6428V38.9018V34.679H31.6134V36.7743V39.0308V41.6419V44.124V51.2803C30.872 51.1191 30.1628 50.8934 29.4536 50.6356C21.6526 47.8633 16.0759 40.4169 16.0759 31.7133C16.0759 20.6565 25.0696 11.6306 36.1586 11.6306C47.2476 11.6306 56.2413 20.6243 56.2413 31.7133C56.2413 42.2221 48.118 50.8934 37.8026 51.7316V54.5683C49.6653 53.7302 59.0458 43.8016 59.0458 31.7455C59.0136 19.077 48.7627 8.82608 36.1264 8.82608Z"
        fill="url(#paint5_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="64.4903"
          y1="31.7083"
          x2="79.7467"
          y2="31.7083"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="81.2803"
          y1="34.2423"
          x2="91.3646"
          y2="34.2423"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="91.9622"
          y1="34.4243"
          x2="105.295"
          y2="34.4243"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
        <linearGradient
          id="paint3_linear"
          x1="106.88"
          y1="34.4243"
          x2="120.214"
          y2="34.4243"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="121.045"
          y1="31.5653"
          x2="131.649"
          y2="31.5653"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="13.2289"
          y1="31.7075"
          x2="59.0238"
          y2="31.7075"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.1163" stopColor="#007EE0" />
          <stop offset="0.9381" stopColor="#007EE0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
