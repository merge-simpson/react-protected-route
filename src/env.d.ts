// src 디렉터리 내에 이 파일을 생성합니다.(vite 공식)
// 각 env 파일에서 사용할 속성들의 명세 인터페이스를 작성합니다.

interface ImportMetaEnv {
  // Prefix: 별도 설정(envPrefix)을 하지 않으면 VITE_로 시작하는 이름을 사용해야 VITE에서 사용 가능합니다.
  readonly VITE_BASE_URL: string;
  readonly VITE_API_BASE_URL: string;
  // 다른 환경 변수들에 대한 타입 정의...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
