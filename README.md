

![디자인](https://github.com/user-attachments/assets/df6e865b-7bc3-418b-bed8-a4ae56f42286)

# 크리스마스 레터 웹 애플리케이션

**사이드 프로젝트 | 2023.11 – 2023.12 | FE 1명, 기획 · 디자인 1명**

크리스마스 트리에 **편지 좌석**을 도입한 웹 애플리케이션. 사용자는 트리의 빈 좌석을 선택해 메시지 카드를 걸고, 서로 따뜻한 인사를 주고받는다.

---

## 주요 기능

| 기능 | 설명 |
| :-- | :-- |
| **좌석 선택** | 트리의 빈 좌석을 클릭해 메시지 작성 시작 |
| **메시지 작성** | 작성 중인 내용은 Redux 상태로 관리 |
| **편지 걸기** | Firestore에 저장 후 실시간으로 트리에 반영 |
| **좌석 잠금** | 편지가 걸린 좌석은 다른 사용자가 선택 불가 |
| **실시간 동기화** | Firestore `onSnapshot`으로 좌석 · 편지 즉시 갱신 |
| **CI/CD** | GitHub Actions → Firebase Hosting 자동 배포 |

---

## 기술 스택

- **React, Redux**  
- **Firebase Firestore, Firebase Hosting**  
- **CSS Modules**  
- **GitHub Actions**  
- 협업 · 프로토타이핑 : **Figma, Git**

---

## 폴더 구조

```
src/
├─ Pages/          # Home, Write, Seats
├─ Components/     # Button, Modal, Tree 등 공통 UI
├─ store/          # 편지·좌석 Redux slice
├─ assets/         # 이미지·아이콘
├─ App.js          # 라우팅
└─ index.js        # 진입점
```

---

## 담당 업무 (FE)

- 좌석 선택 → 편지 작성 → 트리 반영 전체 플로우 설계·구현
- Redux + Firestore로 좌석 상태 실시간 동기화 로직 구축
- CRA 빌드 결과를 Firebase Hosting에 배포, GitHub Actions로 CI/CD 자동화
- 기획·디자인 파트너와 Figma로 인터페이스 설계
