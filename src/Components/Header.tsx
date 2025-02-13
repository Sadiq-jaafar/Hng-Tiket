import React from "react";
import "./Header.css"; 


const Header: React.FC = () => {
  return (
    <nav className="header-nav">
      <div className="header-logo">
      <svg className="header-svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M9.00002 3.5V20.5M2.46402 9.344C2.21602 9.344 1.98902 9.142 2.00002 8.879C2.06702 7.337 2.25502 6.333 2.78002 5.539C3.07948 5.08653 3.45503 4.68933 3.89002 4.365C5.05502 3.5 6.70002 3.5 9.99202 3.5H14.006C17.298 3.5 18.943 3.5 20.11 4.365C20.541 4.685 20.917 5.082 21.219 5.539C21.744 6.333 21.932 7.337 21.999 8.879C22.01 9.142 21.783 9.344 21.534 9.344C20.148 9.344 19.024 10.533 19.024 12C19.024 13.467 20.148 14.656 21.534 14.656C21.783 14.656 22.01 14.858 21.999 15.122C21.932 16.663 21.744 17.667 21.219 18.462C20.9195 18.9141 20.5439 19.311 20.109 19.635C18.943 20.5 17.298 20.5 14.006 20.5H9.99302C6.70102 20.5 5.05602 20.5 3.88902 19.635C3.45438 19.3106 3.07918 18.9134 2.78002 18.461C2.25502 17.667 2.06702 16.663 2.00002 15.121C1.98902 14.858 2.21602 14.656 2.46402 14.656C3.85002 14.656 4.97402 13.467 4.97402 12C4.97402 10.533 3.85002 9.344 2.46402 9.344Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg className="header-svg2" xmlns="http://www.w3.org/2000/svg" width="47" height="26" viewBox="0 0 47 26" fill="none">
  <mask id="path-1-outside-1_4011_316" maskUnits="userSpaceOnUse" x="0" y="-0.312" width="47" height="26" fill="black">
    <rect fill="white" y="-0.312" width="47" height="26"/>
    <path d="M9.072 23.992C8.752 23.992 8.31467 23.8747 7.76 23.64C7.20533 23.384 6.64 23.064 6.064 22.68C5.488 22.2747 4.99733 21.8587 4.592 21.432C4.18667 20.984 3.984 20.5573 3.984 20.152C3.984 19.9173 3.99467 19.672 4.016 19.416C4.03733 19.16 4.06933 18.8293 4.112 18.424C4.15467 17.9973 4.18667 17.432 4.208 16.728C4.22933 16.024 4.24 15.1067 4.24 13.976C4.24 13.5493 4.24 13.1013 4.24 12.632C4.24 12.1627 4.22933 11.672 4.208 11.16H3.632L2 9.016L2.224 8.504C3.35467 8.376 4.06933 8.03467 4.368 7.48C4.66667 6.92533 4.816 6.08267 4.816 4.952L5.36 4.76L7.312 6.232C7.312 6.616 7.312 6.98933 7.312 7.352C7.312 7.71467 7.312 8.07733 7.312 8.44H10.032L11.632 10.68L11.408 11.16H7.344C7.344 11.928 7.344 12.664 7.344 13.368C7.344 14.072 7.344 14.744 7.344 15.384C7.344 16.6213 7.32267 17.5707 7.28 18.232C7.25867 18.8933 7.22667 19.384 7.184 19.704C7.14133 20.024 7.12 20.3227 7.12 20.6C7.12 21.0267 7.344 21.24 7.792 21.24C8.176 21.24 8.592 21.144 9.04 20.952C9.488 20.7387 9.904 20.4827 10.288 20.184H10.736L12.24 22.68C11.9413 23.0427 11.472 23.352 10.832 23.608C10.192 23.864 9.60533 23.992 9.072 23.992Z"/>
    <path d="M16.6423 6.296L14.5303 4.024V3.704C15.1063 2.936 15.8849 2.264 16.8663 1.688L18.9783 3.896L18.9463 4.28C18.5196 4.57867 18.1143 4.90933 17.7303 5.272C17.3676 5.63467 17.0049 5.976 16.6423 6.296ZM19.4902 24.312C18.1249 23.8 17.0689 23.3413 16.3223 22.936C15.5969 22.5093 15.2343 22.1253 15.2343 21.784C15.2343 21.4853 15.2662 21.0267 15.3302 20.408C15.4156 19.768 15.4583 19.1493 15.4583 18.552V13.976C15.4583 13.4213 15.4796 12.9093 15.5223 12.44C15.5863 11.9493 15.6823 11.5227 15.8103 11.16H14.7543L13.0583 8.984L13.2823 8.44H17.3783L19.2343 10.936C18.9783 11.2773 18.8076 11.704 18.7222 12.216C18.6582 12.728 18.6263 13.3787 18.6263 14.168V18.904C18.6263 19.672 18.5942 20.3547 18.5303 20.952C18.4663 21.528 18.4342 21.9653 18.4342 22.264C18.4342 22.4773 18.5089 22.648 18.6583 22.776C18.8289 22.8827 19.2343 23.1067 19.8743 23.448L19.4902 24.312Z"/>
    <path d="M31.0505 19.288L33.7385 21.016C33.3118 22.0187 32.6932 22.7867 31.8825 23.32C31.0932 23.8533 30.1972 24.12 29.1945 24.12C28.5545 24.12 27.8718 23.9813 27.1465 23.704C26.4212 23.4053 25.7385 23.032 25.0985 22.584C24.4585 22.136 23.9252 21.6667 23.4985 21.176C23.0932 20.6853 22.8905 20.2267 22.8905 19.8C22.8905 19.5227 22.8905 19.096 22.8905 18.52C22.9118 17.944 22.9225 17.3467 22.9225 16.728C22.9438 16.088 22.9545 15.5547 22.9545 15.128V12.504C22.9545 11.096 23.3812 10.0293 24.2345 9.304C25.0878 8.55733 26.2292 8.184 27.6585 8.184C28.1065 8.184 28.6292 8.32267 29.2265 8.6C29.8238 8.856 30.4105 9.208 30.9865 9.656C31.5625 10.0827 32.0425 10.5627 32.4265 11.096C32.8105 11.608 33.0025 12.12 33.0025 12.632C33.0025 13.1867 32.9812 13.6773 32.9385 14.104C32.8958 14.5093 32.8425 14.8827 32.7785 15.224L29.4825 14.584C29.6532 13.56 29.7385 12.664 29.7385 11.896C29.7385 11.5333 29.6638 11.288 29.5145 11.16C29.3865 11.032 29.1732 10.968 28.8745 10.968C27.0398 10.968 26.1225 11.8853 26.1225 13.72V16.28C26.1225 17.6453 26.1012 18.648 26.0585 19.288C26.0372 19.9067 26.0265 20.3973 26.0265 20.76C26.0265 20.9947 26.1332 21.176 26.3465 21.304C26.5598 21.432 26.8265 21.496 27.1465 21.496C27.9358 21.496 28.6078 21.336 29.1625 21.016C29.7172 20.6747 30.2185 20.1307 30.6665 19.384L31.0505 19.288Z"/>
    <path d="M37.3448 23.672L35.4888 20.888C35.8088 20.3547 36.2568 19.6507 36.8328 18.776C37.4301 17.9013 38.0594 16.9733 38.7208 15.992C39.4034 14.9893 40.0434 14.04 40.6408 13.144C41.2594 12.248 41.7501 11.5227 42.1128 10.968H41.5688C40.5234 10.968 39.6914 11.032 39.0728 11.16C38.4754 11.288 37.9848 11.5227 37.6008 11.864H37.0568L35.1048 8.984L35.3608 8.44H43.1688L45.2488 11.288C45.0568 11.608 44.7581 12.0773 44.3528 12.696C43.9688 13.3147 43.5208 14.0187 43.0088 14.808C42.5181 15.576 42.0061 16.3653 41.4728 17.176C40.9608 17.9653 40.4701 18.712 40.0008 19.416C39.5528 20.0987 39.1901 20.664 38.9128 21.112H39.1048C39.7234 21.1333 40.5021 21.1333 41.4408 21.112C42.4008 21.0693 43.3394 20.9733 44.2568 20.824L45.7928 23.128L45.5368 23.672H37.3448Z"/>
  </mask>
  <path d="M9.072 23.992C8.752 23.992 8.31467 23.8747 7.76 23.64C7.20533 23.384 6.64 23.064 6.064 22.68C5.488 22.2747 4.99733 21.8587 4.592 21.432C4.18667 20.984 3.984 20.5573 3.984 20.152C3.984 19.9173 3.99467 19.672 4.016 19.416C4.03733 19.16 4.06933 18.8293 4.112 18.424C4.15467 17.9973 4.18667 17.432 4.208 16.728C4.22933 16.024 4.24 15.1067 4.24 13.976C4.24 13.5493 4.24 13.1013 4.24 12.632C4.24 12.1627 4.22933 11.672 4.208 11.16H3.632L2 9.016L2.224 8.504C3.35467 8.376 4.06933 8.03467 4.368 7.48C4.66667 6.92533 4.816 6.08267 4.816 4.952L5.36 4.76L7.312 6.232C7.312 6.616 7.312 6.98933 7.312 7.352C7.312 7.71467 7.312 8.07733 7.312 8.44H10.032L11.632 10.68L11.408 11.16H7.344C7.344 11.928 7.344 12.664 7.344 13.368C7.344 14.072 7.344 14.744 7.344 15.384C7.344 16.6213 7.32267 17.5707 7.28 18.232C7.25867 18.8933 7.22667 19.384 7.184 19.704C7.14133 20.024 7.12 20.3227 7.12 20.6C7.12 21.0267 7.344 21.24 7.792 21.24C8.176 21.24 8.592 21.144 9.04 20.952C9.488 20.7387 9.904 20.4827 10.288 20.184H10.736L12.24 22.68C11.9413 23.0427 11.472 23.352 10.832 23.608C10.192 23.864 9.60533 23.992 9.072 23.992Z" fill="#0E464F"/>
  <path d="M16.6423 6.296L14.5303 4.024V3.704C15.1063 2.936 15.8849 2.264 16.8663 1.688L18.9783 3.896L18.9463 4.28C18.5196 4.57867 18.1143 4.90933 17.7303 5.272C17.3676 5.63467 17.0049 5.976 16.6423 6.296ZM19.4902 24.312C18.1249 23.8 17.0689 23.3413 16.3223 22.936C15.5969 22.5093 15.2343 22.1253 15.2343 21.784C15.2343 21.4853 15.2662 21.0267 15.3302 20.408C15.4156 19.768 15.4583 19.1493 15.4583 18.552V13.976C15.4583 13.4213 15.4796 12.9093 15.5223 12.44C15.5863 11.9493 15.6823 11.5227 15.8103 11.16H14.7543L13.0583 8.984L13.2823 8.44H17.3783L19.2343 10.936C18.9783 11.2773 18.8076 11.704 18.7222 12.216C18.6582 12.728 18.6263 13.3787 18.6263 14.168V18.904C18.6263 19.672 18.5942 20.3547 18.5303 20.952C18.4663 21.528 18.4342 21.9653 18.4342 22.264C18.4342 22.4773 18.5089 22.648 18.6583 22.776C18.8289 22.8827 19.2343 23.1067 19.8743 23.448L19.4902 24.312Z" fill="#0E464F"/>
  <path d="M31.0505 19.288L33.7385 21.016C33.3118 22.0187 32.6932 22.7867 31.8825 23.32C31.0932 23.8533 30.1972 24.12 29.1945 24.12C28.5545 24.12 27.8718 23.9813 27.1465 23.704C26.4212 23.4053 25.7385 23.032 25.0985 22.584C24.4585 22.136 23.9252 21.6667 23.4985 21.176C23.0932 20.6853 22.8905 20.2267 22.8905 19.8C22.8905 19.5227 22.8905 19.096 22.8905 18.52C22.9118 17.944 22.9225 17.3467 22.9225 16.728C22.9438 16.088 22.9545 15.5547 22.9545 15.128V12.504C22.9545 11.096 23.3812 10.0293 24.2345 9.304C25.0878 8.55733 26.2292 8.184 27.6585 8.184C28.1065 8.184 28.6292 8.32267 29.2265 8.6C29.8238 8.856 30.4105 9.208 30.9865 9.656C31.5625 10.0827 32.0425 10.5627 32.4265 11.096C32.8105 11.608 33.0025 12.12 33.0025 12.632C33.0025 13.1867 32.9812 13.6773 32.9385 14.104C32.8958 14.5093 32.8425 14.8827 32.7785 15.224L29.4825 14.584C29.6532 13.56 29.7385 12.664 29.7385 11.896C29.7385 11.5333 29.6638 11.288 29.5145 11.16C29.3865 11.032 29.1732 10.968 28.8745 10.968C27.0398 10.968 26.1225 11.8853 26.1225 13.72V16.28C26.1225 17.6453 26.1012 18.648 26.0585 19.288C26.0372 19.9067 26.0265 20.3973 26.0265 20.76C26.0265 20.9947 26.1332 21.176 26.3465 21.304C26.5598 21.432 26.8265 21.496 27.1465 21.496C27.9358 21.496 28.6078 21.336 29.1625 21.016C29.7172 20.6747 30.2185 20.1307 30.6665 19.384L31.0505 19.288Z" fill="#0E464F"/>
  <path d="M37.3448 23.672L35.4888 20.888C35.8088 20.3547 36.2568 19.6507 36.8328 18.776C37.4301 17.9013 38.0594 16.9733 38.7208 15.992C39.4034 14.9893 40.0434 14.04 40.6408 13.144C41.2594 12.248 41.7501 11.5227 42.1128 10.968H41.5688C40.5234 10.968 39.6914 11.032 39.0728 11.16C38.4754 11.288 37.9848 11.5227 37.6008 11.864H37.0568L35.1048 8.984L35.3608 8.44H43.1688L45.2488 11.288C45.0568 11.608 44.7581 12.0773 44.3528 12.696C43.9688 13.3147 43.5208 14.0187 43.0088 14.808C42.5181 15.576 42.0061 16.3653 41.4728 17.176C40.9608 17.9653 40.4701 18.712 40.0008 19.416C39.5528 20.0987 39.1901 20.664 38.9128 21.112H39.1048C39.7234 21.1333 40.5021 21.1333 41.4408 21.112C42.4008 21.0693 43.3394 20.9733 44.2568 20.824L45.7928 23.128L45.5368 23.672H37.3448Z" fill="#0E464F"/>
  <path d="M9.072 23.992C8.752 23.992 8.31467 23.8747 7.76 23.64C7.20533 23.384 6.64 23.064 6.064 22.68C5.488 22.2747 4.99733 21.8587 4.592 21.432C4.18667 20.984 3.984 20.5573 3.984 20.152C3.984 19.9173 3.99467 19.672 4.016 19.416C4.03733 19.16 4.06933 18.8293 4.112 18.424C4.15467 17.9973 4.18667 17.432 4.208 16.728C4.22933 16.024 4.24 15.1067 4.24 13.976C4.24 13.5493 4.24 13.1013 4.24 12.632C4.24 12.1627 4.22933 11.672 4.208 11.16H3.632L2 9.016L2.224 8.504C3.35467 8.376 4.06933 8.03467 4.368 7.48C4.66667 6.92533 4.816 6.08267 4.816 4.952L5.36 4.76L7.312 6.232C7.312 6.616 7.312 6.98933 7.312 7.352C7.312 7.71467 7.312 8.07733 7.312 8.44H10.032L11.632 10.68L11.408 11.16H7.344C7.344 11.928 7.344 12.664 7.344 13.368C7.344 14.072 7.344 14.744 7.344 15.384C7.344 16.6213 7.32267 17.5707 7.28 18.232C7.25867 18.8933 7.22667 19.384 7.184 19.704C7.14133 20.024 7.12 20.3227 7.12 20.6C7.12 21.0267 7.344 21.24 7.792 21.24C8.176 21.24 8.592 21.144 9.04 20.952C9.488 20.7387 9.904 20.4827 10.288 20.184H10.736L12.24 22.68C11.9413 23.0427 11.472 23.352 10.832 23.608C10.192 23.864 9.60533 23.992 9.072 23.992Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_4011_316)"/>
  <path d="M16.6423 6.296L14.5303 4.024V3.704C15.1063 2.936 15.8849 2.264 16.8663 1.688L18.9783 3.896L18.9463 4.28C18.5196 4.57867 18.1143 4.90933 17.7303 5.272C17.3676 5.63467 17.0049 5.976 16.6423 6.296ZM19.4902 24.312C18.1249 23.8 17.0689 23.3413 16.3223 22.936C15.5969 22.5093 15.2343 22.1253 15.2343 21.784C15.2343 21.4853 15.2662 21.0267 15.3302 20.408C15.4156 19.768 15.4583 19.1493 15.4583 18.552V13.976C15.4583 13.4213 15.4796 12.9093 15.5223 12.44C15.5863 11.9493 15.6823 11.5227 15.8103 11.16H14.7543L13.0583 8.984L13.2823 8.44H17.3783L19.2343 10.936C18.9783 11.2773 18.8076 11.704 18.7222 12.216C18.6582 12.728 18.6263 13.3787 18.6263 14.168V18.904C18.6263 19.672 18.5942 20.3547 18.5303 20.952C18.4663 21.528 18.4342 21.9653 18.4342 22.264C18.4342 22.4773 18.5089 22.648 18.6583 22.776C18.8289 22.8827 19.2343 23.1067 19.8743 23.448L19.4902 24.312Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_4011_316)"/>
  <path d="M31.0505 19.288L33.7385 21.016C33.3118 22.0187 32.6932 22.7867 31.8825 23.32C31.0932 23.8533 30.1972 24.12 29.1945 24.12C28.5545 24.12 27.8718 23.9813 27.1465 23.704C26.4212 23.4053 25.7385 23.032 25.0985 22.584C24.4585 22.136 23.9252 21.6667 23.4985 21.176C23.0932 20.6853 22.8905 20.2267 22.8905 19.8C22.8905 19.5227 22.8905 19.096 22.8905 18.52C22.9118 17.944 22.9225 17.3467 22.9225 16.728C22.9438 16.088 22.9545 15.5547 22.9545 15.128V12.504C22.9545 11.096 23.3812 10.0293 24.2345 9.304C25.0878 8.55733 26.2292 8.184 27.6585 8.184C28.1065 8.184 28.6292 8.32267 29.2265 8.6C29.8238 8.856 30.4105 9.208 30.9865 9.656C31.5625 10.0827 32.0425 10.5627 32.4265 11.096C32.8105 11.608 33.0025 12.12 33.0025 12.632C33.0025 13.1867 32.9812 13.6773 32.9385 14.104C32.8958 14.5093 32.8425 14.8827 32.7785 15.224L29.4825 14.584C29.6532 13.56 29.7385 12.664 29.7385 11.896C29.7385 11.5333 29.6638 11.288 29.5145 11.16C29.3865 11.032 29.1732 10.968 28.8745 10.968C27.0398 10.968 26.1225 11.8853 26.1225 13.72V16.28C26.1225 17.6453 26.1012 18.648 26.0585 19.288C26.0372 19.9067 26.0265 20.3973 26.0265 20.76C26.0265 20.9947 26.1332 21.176 26.3465 21.304C26.5598 21.432 26.8265 21.496 27.1465 21.496C27.9358 21.496 28.6078 21.336 29.1625 21.016C29.7172 20.6747 30.2185 20.1307 30.6665 19.384L31.0505 19.288Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_4011_316)"/>
  <path d="M37.3448 23.672L35.4888 20.888C35.8088 20.3547 36.2568 19.6507 36.8328 18.776C37.4301 17.9013 38.0594 16.9733 38.7208 15.992C39.4034 14.9893 40.0434 14.04 40.6408 13.144C41.2594 12.248 41.7501 11.5227 42.1128 10.968H41.5688C40.5234 10.968 39.6914 11.032 39.0728 11.16C38.4754 11.288 37.9848 11.5227 37.6008 11.864H37.0568L35.1048 8.984L35.3608 8.44H43.1688L45.2488 11.288C45.0568 11.608 44.7581 12.0773 44.3528 12.696C43.9688 13.3147 43.5208 14.0187 43.0088 14.808C42.5181 15.576 42.0061 16.3653 41.4728 17.176C40.9608 17.9653 40.4701 18.712 40.0008 19.416C39.5528 20.0987 39.1901 20.664 38.9128 21.112H39.1048C39.7234 21.1333 40.5021 21.1333 41.4408 21.112C42.4008 21.0693 43.3394 20.9733 44.2568 20.824L45.7928 23.128L45.5368 23.672H37.3448Z" stroke="white" stroke-width="2" mask="url(#path-1-outside-1_4011_316)"/>
</svg>
      </div>
      <div className="header-links">
        <a href="#" className="header-link">Events</a>
        <a href="#" className="header-link">My Tickets</a>
        <a href="#" className="header-link">About Project</a>
      </div>
      <div className="header-btn">My Ticket</div>
    </nav>
  );
};

export default Header;