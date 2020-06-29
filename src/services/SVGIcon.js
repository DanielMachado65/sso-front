import React from 'react';

const getViewBox = name => {
  switch (name) {
    case 'farmbox-logo-with-writes':
      return '0 0 149 48';
    case 'farmbox-logo-footer':
      return '0 0 80 53';
    default:
      return '0 0 512 512';
  }
};

const getPath = (name) => {
  switch (name) {
    case 'farmbox-logo-with-writes':
      return <>
        <path fillRule="evenodd" clipRule="evenodd" d="M41.8908 11.364L22.1857 0.217165C21.6745 -0.0723073 21.0454 -0.0723073 20.5346 0.21668L0.825086 11.364C0.314295 11.652 0 12.1859 0 12.7639V35.0173C0 35.5948 0.314295 36.1291 0.825086 36.4176L20.5346 47.563C20.7905 47.7085 21.0751 47.7808 21.3592 47.7808C21.6448 47.7808 21.9299 47.7085 22.1857 47.563L41.8908 36.4176C42.4006 36.1287 42.7159 35.5953 42.7159 35.0173V12.7639C42.7159 12.1859 42.4006 11.652 41.8908 11.364Z" fill="#363E48" />
        <path fillRule="evenodd" clipRule="evenodd" d="M40.5774 12.0825L22.1998 1.68654C21.723 1.41657 21.1363 1.41657 20.6599 1.68609L2.27811 12.0825C1.80173 12.3511 1.50861 12.849 1.50861 13.388V34.1424C1.50861 34.681 1.80173 35.1793 2.27811 35.4484L20.6599 45.843C20.8985 45.9786 21.164 46.046 21.4289 46.046C21.6953 46.046 21.9612 45.9786 22.1998 45.843L40.5774 35.4484C41.0529 35.1789 41.3469 34.6814 41.3469 34.1424V13.388C41.3469 12.849 41.0529 12.3511 40.5774 12.0825Z" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.4193 3.87476V3.85718L21.4038 3.86597L21.3882 3.85718V3.87476L3.01721 14.2645V27.5745L21.4038 17.1763L39.7868 27.5745V14.2645L21.4193 3.87476Z" fill="#CEF1F9" />
        <path fillRule="evenodd" clipRule="evenodd" d="M3.01721 27.5752L21.4193 37.9812L39.8179 27.5752L21.4184 17.1678L3.01721 27.5752Z" fill="#ABEB69" />
        <path fillRule="evenodd" clipRule="evenodd" d="M5.09037 28.7422L22.9105 18.6659L23.7856 19.104L5.91871 29.2106L7.91075 30.337L25.9268 20.1499L26.8023 20.5884L8.74018 30.8061L10.7319 31.9323L28.944 21.6339L29.8191 22.0724L11.5605 32.4009L13.1751 33.3139L31.2083 23.1179L32.0834 23.5568L14.005 33.7832L15.9967 34.9095L34.2242 24.6019L35.1011 25.0408L16.8255 35.3781L18.7833 36.4853L37.2424 26.0858L38.1179 26.5235L19.6135 36.9547L21.4095 37.9703L39.7981 27.5698V29.9347L21.4193 40.3006V40.3201L21.4021 40.3103L21.3996 40.3117V40.3089L3.01721 29.9128V27.5698L5.09037 28.7422Z" fill="#276D33" />
        <path fillRule="evenodd" clipRule="evenodd" d="M39.8204 29.8849V34.0311L21.4219 44.4376V40.2922L39.8204 29.8849Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.4349 44.4376V40.2922L3.03278 29.8849V34.0311L21.4349 44.4376Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.4681 24.3683L21.3499 45.1991L3.16876 34.7775L3.16876 14.0762L21.4058 24.3323L3.41752 13.9169L21.3454 3.56628L39.4613 14.1008L24.84 22.4474L39.71 14.0762L39.71 34.7775L21.5289 45.1991L21.5314 24.3362L21.4715 24.3704L21.4681 24.3683Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        <path fillRule="evenodd" clipRule="evenodd" d="M61.9887 14.3861C63.1733 14.3861 64.0912 14.5576 64.6978 14.6699C64.7948 14.6882 64.8857 14.7044 64.9699 14.7198L65.2383 14.7664V17.3765L64.7824 17.2812C64.1552 17.149 63.443 16.9998 62.3937 16.9998C61.5134 16.9998 61.0088 17.383 61.0088 18.0508V20.0607H64.7717V22.7019H61.0088V34.4067H57.7138V22.7019H55.6926V20.0607H57.7138V18.243C57.7138 15.828 59.3126 14.3861 61.9887 14.3861Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M69.3898 34.3958C67.9859 34.3958 66.9276 34.1424 66.1546 33.6214C65.1475 32.943 64.6367 31.7996 64.6367 30.2215C64.6367 28.7452 65.1615 27.5385 66.1534 26.732C67.1377 25.932 68.5301 25.5261 70.292 25.5261H72.6283V24.1637C72.6283 22.9846 71.8012 22.2803 70.4163 22.2803C68.5995 22.2803 67.44 22.4814 65.9357 22.8524L65.7871 22.8893V20.6475L65.8763 20.6239C67.217 20.2728 68.7584 20.0713 70.1049 20.0713C74.0458 20.0713 75.5112 21.3291 75.5112 24.7119V31.2903C75.5112 31.8085 75.908 32.0498 76.7595 32.0498H76.8784V34.204H75.8267C75.1008 34.204 74.135 33.936 73.6015 33.1835L73.4599 32.9836L73.2852 33.1567C72.4329 34.0021 71.195 34.3958 69.3898 34.3958ZM70.1355 27.6256C68.957 27.6256 67.5812 28.2622 67.5812 30.0569C67.5812 31.5697 68.2852 32.1868 70.0112 32.1868C72.1844 32.1868 72.6283 30.7664 72.6283 30.3861V27.6256H70.1355Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M70.1049 20.274C73.8955 20.274 75.3047 21.477 75.3047 24.7119V31.2903C75.3047 31.909 75.7647 32.2322 76.6723 32.2517V34.0013H75.8271C75.1532 34.0013 74.2592 33.7564 73.7712 33.0675L73.4879 32.6681L73.1386 33.0139C72.3272 33.8184 71.1355 34.1931 69.3893 34.1931C68.0284 34.1931 67.0085 33.9514 66.2706 33.4539C65.323 32.8161 64.8427 31.7286 64.8427 30.2215C64.8427 28.8076 65.3415 27.6548 66.2846 26.8881C67.2306 26.1189 68.5792 25.7288 70.2915 25.7288H72.4214H72.8343V25.3234V24.1637C72.8343 22.8771 71.9077 22.0775 70.4158 22.0775C68.6205 22.0775 67.461 22.2714 65.9931 22.6294V20.8027C67.3029 20.4662 68.7972 20.274 70.1049 20.274ZM70.0116 32.3895C72.1447 32.3895 72.8351 31.0397 72.8351 30.3861V27.8284V27.4229H72.4222H70.1359C68.8625 27.4229 67.3751 28.1126 67.3751 30.0568C67.3751 31.6921 68.1634 32.3895 70.0116 32.3895ZM70.1049 19.8685C74.1436 19.8685 75.7176 21.2256 75.7181 24.7123V31.2907C75.7181 31.4715 75.7181 31.8474 76.7598 31.8474H77.0852V34.4071H75.8271C75.0351 34.4071 74.0057 34.1083 73.4326 33.2998C72.5399 34.1849 71.2396 34.5989 69.3897 34.5989C67.9429 34.5989 66.847 34.3346 66.0377 33.7888C64.9716 33.0707 64.4302 31.8705 64.4302 30.2219C64.4302 28.6835 64.9802 27.4229 66.0216 26.5763C67.0436 25.7454 68.4797 25.3238 70.292 25.3238H72.4218V24.1641C72.4218 23.0965 71.6905 22.4834 70.4162 22.4834C68.6205 22.4834 67.4734 22.6825 65.9861 23.0495L65.5806 23.1488V20.4917L65.823 20.4281C67.179 20.0729 68.7394 19.8685 70.1049 19.8685ZM70.0116 31.984C72.013 31.984 72.4218 30.7238 72.4222 30.3861V27.8284H70.1359C69.0012 27.8284 67.7881 28.4139 67.7881 30.0568C67.7881 31.463 68.3905 31.984 70.0116 31.984Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M84.6882 19.8685C85.3935 19.8685 85.9724 19.918 86.4088 20.0129L86.6628 20.0696V23.1606L86.2697 23.0791C85.4922 22.9173 84.9033 22.839 84.4718 22.839C82.2351 22.839 82.0608 24.986 82.0608 25.6429V34.4071H78.7654V20.0611H81.5546L81.6843 21.0335C82.4911 20.2509 83.4809 19.8685 84.6882 19.8685Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M101.574 19.8685C104.854 19.8685 106.253 21.4154 106.252 25.0411V34.4071H102.957V24.767C102.957 23.017 102.525 22.4834 101.107 22.4834C99.5976 22.4834 98.6343 23.6735 98.6343 24.4933V34.4071H95.3393V24.767C95.3393 23.017 94.9078 22.4834 93.4882 22.4834C91.9794 22.4834 91.0165 23.6735 91.0165 24.4933V34.4071H87.7206V20.0611H90.4974L90.6609 20.9678C91.5937 20.2379 92.6995 19.8685 93.9556 19.8685C95.6171 19.8685 96.8707 20.3847 97.6879 21.4057C98.7128 20.3725 99.9887 19.8685 101.574 19.8685Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M113.576 34.3958C111.717 34.3958 110.729 34.2669 109.773 34.142C109.565 34.1148 109.373 34.0893 109.176 34.0666L109.072 34.0536V14.7815H111.955V21.1336L112.275 20.9272C113.156 20.3592 114.169 20.0713 115.286 20.0713C117.116 20.0713 118.397 20.5948 119.204 21.6713C119.965 22.685 120.319 24.1739 120.319 26.3569C120.319 29.488 119.861 31.4269 118.834 32.6438C117.813 33.8553 116.191 34.3958 113.576 34.3958ZM114.789 22.2803C113.059 22.2803 111.956 23.5908 111.956 24.493V32.0911L112.142 32.1089C112.679 32.1617 113.25 32.1868 113.888 32.1868C116.494 32.1868 117.374 30.7847 117.374 26.6302C117.375 23.2968 116.771 22.2803 114.789 22.2803Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M111.749 14.9842V20.7577V21.5095L112.389 21.0967C113.236 20.5505 114.211 20.274 115.287 20.274C117.046 20.274 118.273 20.7707 119.039 21.7921C119.772 22.7689 120.114 24.2192 120.114 26.3569C120.114 29.4373 119.671 31.3361 118.676 32.5148C117.697 33.6757 116.125 34.1935 113.577 34.1935C111.731 34.1935 110.75 34.0657 109.786 33.9396C109.616 33.9169 109.449 33.8954 109.279 33.8748V14.9846H111.749V14.9842ZM113.888 32.3895C116.993 32.3895 117.581 30.3654 117.581 26.6302C117.581 23.1837 116.902 22.0771 114.789 22.0771C112.933 22.0771 111.749 23.5076 111.749 24.4925V31.907V32.274L112.121 32.3104C112.665 32.364 113.243 32.3895 113.888 32.3895ZM112.162 14.5787H108.865V34.2332L109.152 34.2681C109.353 34.2916 109.548 34.3171 109.746 34.3435C110.711 34.4696 111.708 34.5989 113.576 34.5989C116.258 34.5989 117.929 34.0361 118.993 32.7735C120.053 31.5173 120.526 29.5386 120.526 26.3573C120.526 24.1304 120.159 22.6026 119.37 21.5516C118.521 20.4188 117.186 19.8689 115.286 19.8689C114.124 19.8689 113.076 20.1682 112.162 20.7581V14.5787H112.162ZM113.888 31.984C113.261 31.984 112.694 31.9589 112.162 31.9074V24.4929C112.162 23.6921 113.209 22.483 114.789 22.483C116.434 22.483 117.168 23.0827 117.168 26.6306C117.168 30.6845 116.371 31.984 113.888 31.984Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M128.596 34.3957C126.474 34.3957 125.047 33.9063 124.107 32.8553C123.057 31.6847 122.568 29.8115 122.568 26.959C122.568 24.5809 123.048 22.8771 124.035 21.7495C125.024 20.6202 126.516 20.0708 128.596 20.0708C130.676 20.0708 132.168 20.6198 133.156 21.7495C134.144 22.8783 134.624 24.5821 134.624 26.959C134.624 29.8102 134.135 31.6839 133.086 32.8553C132.144 33.9063 130.717 34.3957 128.596 34.3957ZM128.596 22.2247C127.369 22.2247 126.62 22.5681 126.165 23.3381C125.714 24.102 125.513 25.3456 125.513 27.3705C125.513 31.4143 126.745 32.2427 128.596 32.2427C130.447 32.2427 131.679 31.4143 131.679 27.3705C131.679 25.346 131.478 24.102 131.027 23.3381C130.572 22.5681 129.822 22.2247 128.596 22.2247Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M128.596 20.274C130.613 20.274 132.053 20.7999 132.999 21.8817C133.954 22.9724 134.418 24.6332 134.418 26.959C134.418 29.7584 133.945 31.5895 132.931 32.7212C132.031 33.7255 130.653 34.1931 128.596 34.1931C126.538 34.1931 125.16 33.7255 124.261 32.7212C123.247 31.5903 122.774 29.7592 122.774 26.959C122.774 24.6316 123.238 22.9708 124.192 21.8821C125.139 20.7999 126.58 20.274 128.596 20.274ZM128.596 32.4455C130.963 32.4455 131.885 31.0227 131.885 27.3706C131.885 25.3079 131.676 24.0335 131.206 23.2364C130.709 22.3967 129.905 22.022 128.596 22.022C127.288 22.022 126.483 22.3967 125.987 23.2364C125.517 24.0331 125.307 25.3079 125.307 27.3706C125.307 31.0227 126.229 32.4455 128.596 32.4455ZM128.596 19.8685C126.452 19.8685 124.909 20.4402 123.879 21.6173C122.857 22.7843 122.362 24.5315 122.362 26.959C122.362 29.863 122.867 31.7797 123.951 32.9892C124.934 34.0872 126.411 34.5985 128.596 34.5985C130.78 34.5985 132.257 34.0872 133.241 32.9892C134.325 31.7797 134.831 29.863 134.831 26.959C134.831 24.5315 134.334 22.7843 133.313 21.6173C132.283 20.4402 130.74 19.8685 128.596 19.8685ZM128.596 32.04C126.82 32.04 125.719 31.2582 125.719 27.3706C125.719 25.3838 125.912 24.1714 126.344 23.4399C126.763 22.7304 127.435 22.4275 128.596 22.4275C129.755 22.4275 130.429 22.7304 130.848 23.4399C131.28 24.1718 131.473 25.3838 131.473 27.3706C131.473 31.2582 130.372 32.04 128.596 32.04Z" fill="#20252B" />
        <path fillRule="evenodd" clipRule="evenodd" d="M148.032 20.0607L143.627 26.9046L148.434 34.4067H144.545L141.774 29.6477L138.855 34.4067H135.159L139.874 27.0121L135.539 20.0607H139.357L141.844 24.2679L144.361 20.0607H148.032Z" fill="#20252B" />
      </>
    case 'farmbox-logo-footer':
      return <>
        <path d="M8.52337 46.5794C7.47664 48.3738 6.13084 49.2461 4.46106 49.2461C2.99066 49.2461 1.84424 48.6978 1.04673 47.6012C0.34891 46.6293 0 45.3582 0 43.8131C0 42.218 0.34891 40.9719 1.04673 40.0249C1.81932 38.9283 2.96573 38.38 4.48598 38.38C6.35514 38.38 7.60125 39.3271 8.27415 41.2212L7.17757 41.5202C6.5296 40.0747 5.6324 39.352 4.48598 39.352C2.29284 39.352 1.22118 40.8473 1.22118 43.8131C1.22118 45.0342 1.47041 46.0311 1.94393 46.8536C2.51714 47.8255 3.36449 48.299 4.48598 48.299C5.1838 48.299 5.80686 48.0747 6.33022 47.6511C6.72897 47.3271 7.15265 46.8286 7.57633 46.1059L8.52337 46.5794ZM17.2212 49.0467H16.0249V42.0187C16.0249 40.2243 15.3271 39.3271 13.9065 39.3271C13.3084 39.3271 12.7103 39.5514 12.0872 40C11.9377 40.0997 11.4393 40.5483 10.5919 41.3209V49.0467H9.39564V34.4922H10.5919V40.2243C11.7632 38.9782 12.9346 38.38 14.1558 38.38C16.1994 38.38 17.2212 39.5514 17.2212 41.8941V49.0467ZM26.567 46.704C26.0187 47.6012 25.4704 48.2492 24.8972 48.623C24.2492 49.0467 23.4517 49.271 22.4548 49.271C20.9097 49.271 19.7632 48.7227 18.9907 47.6511C18.3427 46.704 18.0187 45.433 18.0187 43.8131C18.0187 42.3427 18.3427 41.0966 19.0156 40.0997C19.7632 38.9532 20.8598 38.38 22.2804 38.38C23.7259 38.38 24.8224 38.9532 25.5202 40.0997C26.1184 41.0467 26.4174 42.3177 26.4174 43.8629H19.19C19.19 45.109 19.4393 46.1059 19.9128 46.9034C20.486 47.8504 21.3583 48.324 22.5296 48.324C23.2523 48.324 23.8505 48.1246 24.324 47.7508C24.6729 47.4517 25.0966 46.9532 25.5701 46.2056L26.567 46.704ZM25.2461 42.8909C24.9719 40.5233 23.9751 39.3271 22.2555 39.3271C21.3583 39.3271 20.6106 39.7009 20.0374 40.4735C19.514 41.1464 19.2399 41.9688 19.215 42.8909H25.2461ZM35.2648 46.5794C34.2181 48.3738 32.8723 49.2461 31.2025 49.2461C29.7321 49.2461 28.5857 48.6978 27.7881 47.6012C27.0903 46.6293 26.7414 45.3582 26.7414 43.8131C26.7414 42.218 27.0903 40.9719 27.7881 40.0249C28.5607 38.9283 29.7071 38.38 31.2274 38.38C33.0966 38.38 34.3427 39.3271 35.0156 41.2212L33.919 41.5202C33.271 40.0747 32.3738 39.352 31.2274 39.352C29.0343 39.352 27.9626 40.8473 27.9626 43.8131C27.9626 45.0342 28.2118 46.0311 28.6853 46.8536C29.2585 47.8255 30.1059 48.299 31.2274 48.299C31.9252 48.299 32.5483 48.0747 33.0716 47.6511C33.4704 47.3271 33.8941 46.8286 34.3177 46.1059L35.2648 46.5794ZM43.9128 49.0467H42.567L39.2523 43.3395L37.1838 45.6573V49.0467H35.9875V34.4922H37.1838V44.1371L41.9938 38.5794H43.3894L40.0249 42.4922L43.9128 49.0467ZM53.6573 43.8629C53.6573 45.3832 53.3582 46.6043 52.785 47.5514C52.0872 48.6729 51.0156 49.2461 49.5701 49.2461C48.3738 49.2461 47.2772 48.7227 46.3302 47.676V52.7601H45.1339V38.5794H46.3302V40.1994H46.3801C47.2025 38.9782 48.2243 38.38 49.5202 38.38C50.866 38.38 51.9377 38.9782 52.7103 40.1744C53.3084 41.1962 53.6573 42.4423 53.6573 43.8629ZM52.4611 43.6386C52.4611 42.542 52.2368 41.595 51.8131 40.7975C51.2648 39.8255 50.4673 39.352 49.4455 39.352C48.8473 39.352 48.2741 39.5514 47.7009 39.9751C47.4019 40.1994 46.9283 40.623 46.3302 41.271V46.4299C46.3302 46.7539 46.729 47.1526 47.5514 47.6261C48.324 48.0747 48.8972 48.299 49.271 48.299C51.3894 48.299 52.4611 46.729 52.4611 43.6386ZM56.1495 49.0467H54.9533V34.4922H56.1495V49.0467ZM65.0716 49.0467H63.9252L63.7757 47.7757C62.5545 48.7476 61.3084 49.2461 60.0125 49.2461C59.1651 49.2461 58.4922 48.9969 57.9688 48.4984C57.4455 48 57.1713 47.352 57.1713 46.5047C57.1713 45.4579 57.5452 44.6355 58.3177 43.9875C58.9159 43.4891 59.7882 43.0903 60.9595 42.7663C61.9065 42.567 62.8785 42.3676 63.8006 42.1433V41.3956C63.8006 40 63.0031 39.3022 61.433 39.3022C60.2118 39.3022 59.2149 39.9252 58.4174 41.1962L57.6199 40.7227C58.4673 39.1277 59.7383 38.3551 61.4829 38.3551C62.6542 38.3551 63.5265 38.6043 64.0997 39.1277C64.6729 39.6511 64.947 40.4735 64.947 41.6199C64.947 42.0685 64.9221 42.7414 64.8972 43.6386C64.8723 44.5358 64.8473 45.2336 64.8473 45.6822C64.8473 47.028 64.9221 48.1246 65.0716 49.0467ZM63.7258 46.5545V43.1152C62.081 43.4642 60.9844 43.7881 60.3863 44.0623C59.0405 44.6604 58.3427 45.4828 58.3427 46.5047C58.3427 47.0529 58.5171 47.4766 58.8411 47.8006C59.19 48.1246 59.6386 48.299 60.1869 48.299C61.4081 48.299 62.5794 47.7009 63.7258 46.5545ZM73.919 49.0467H72.7227V42.0187C72.7227 40.2243 72.0249 39.3271 70.6044 39.3271C70.0062 39.3271 69.4081 39.5514 68.785 40C68.6355 40.0997 68.1371 40.5483 67.2897 41.3209V49.0467H66.0934V38.5794H67.2897V40.2243C68.4611 38.9782 69.6324 38.38 70.8287 38.38C72.8723 38.38 73.8941 39.5514 73.8941 41.8941V49.0467H73.919ZM80 49.0716C79.2274 49.1962 78.8037 49.2461 78.7788 49.2461C78.0312 49.2461 77.4829 49.1215 77.134 48.8972C76.7103 48.623 76.5109 48.1246 76.5109 47.4268V39.5514H74.9657V38.6043H76.5109V35.1402H77.7072V38.5794H79.9751V39.5265H77.7321V47.2025C77.7321 47.9252 78.081 48.2741 78.7788 48.2741C79.1277 48.2741 79.5265 48.1994 80 48.0498V49.0716Z" fill="#363E48" />
        <path d="M37.5825 22.8536C37.5825 24.8723 37.9564 26.8411 38.6043 28.6355H38.8037C39.0529 28.6355 39.3021 28.6355 39.5514 28.6106C39.5264 28.5607 39.5264 28.5109 39.5264 28.461C39.2772 27.514 39.028 26.1433 38.9034 24.3489C38.9034 17.7445 42.5171 14.0561 45.109 12.2617C47.6261 10.3427 50.7663 9.17132 54.1807 9.17132L55.2274 9.19627C55.0529 8.14954 54.7788 7.15263 54.4299 6.18066H54.2305C45.0342 6.20559 37.5825 13.6573 37.5825 22.8536ZM41.919 28.3364C44.3364 25.1962 47.8754 22.9782 51.9377 22.2305C49.4953 25.3458 45.9813 27.5888 41.919 28.3364ZM53.5078 19.8131C48.2243 20.0623 43.8131 23.2772 40.5732 27.2897V27.2648C43.0155 22.0062 48.3987 18.7165 54.1807 18.4423C53.9813 18.9159 53.757 19.3645 53.5078 19.8131ZM54.9034 16.2742L54.1807 16.2492C48.4735 16.2492 43.3146 19.7632 40.2741 24.4237C42.2679 18.542 48.8473 14.8785 54.8785 14.8785H55.2025C55.1277 15.377 55.028 15.8256 54.9034 16.2742ZM55.4517 12.7103H54.2056C48.6978 12.7103 43.7383 15.9252 40.7726 20.4361C42.8411 14.6542 48.8972 11.3395 54.9034 11.3395H55.4766C55.4766 11.5389 55.4766 11.7383 55.4766 11.9626C55.4766 12.2367 55.4517 12.486 55.4517 12.7103Z" fill="#363E48" />
        <path d="M29.6324 25.8941C31.0529 26.8162 32.5732 27.4642 34.1184 27.8879C34.9159 28.5358 35.7383 29.134 36.6106 29.6324C36.9096 29.7072 37.2087 29.7819 37.5327 29.8318L37.6573 29.7072C36.4361 27.7383 35.5389 25.5452 35.0405 23.1527C33.6199 16.4984 35.6137 9.91901 39.8504 5.23365C39.5265 4.80997 39.1775 4.38629 38.8286 3.98754C37.3333 2.31776 35.5888 0.996885 33.7196 0L33.5451 0.149533C26.1183 6.80374 25.4455 18.1682 31.9501 25.7196C31.5763 25.4704 31.2274 25.1963 30.9034 24.9221C30.8286 24.8474 30.7788 24.7726 30.704 24.7227C25.6698 19.1402 24.8971 11.2648 28.137 5.00935C27.1402 4.56075 26.1433 4.23676 25.0965 4.01246L24.9969 4.16199C20.2616 11.4642 22.3551 21.1589 29.6324 25.8941Z" fill="#363E48" />
      </>
    default:
      return <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200z" />
  }
};

const SVGIcon = ({ name = "", style = {}, fill = "", viewBox = "", width = "100%", className = "", height = "100%" }) => (
  <svg
    width={width}
    style={style}
    height={height}
    className={className}
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name)}
  </svg>
);

export default SVGIcon;