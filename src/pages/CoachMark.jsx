import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';

import { pistolPoseWoman } from '../assets';

const CoachMark = () => {
  const COACH_MARK_URL = '/coach-mark';
  const AVATAR_COUNT = 7;

  const location = useLocation();

  const shouldShowCoachMark = location.pathname === COACH_MARK_URL;

  const runCoachMark = () => {
    const driverObj = driver({
      popoverClass: 'driverjs-theme',
      allowClose: false,
      steps: [
        {
          element: '#coach-mark img:nth-child(1)',
          popover: {
            description: 'こんにちは。私はシユンです。',
            side: 'left',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(2)',
          popover: {
            description:
              'このコーチマークページではチュートリアルを見ることができます。',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(3)',
          popover: {
            description: '必要なところに',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(4)',
          popover: {
            description: 'こうやって、',
            side: 'bottom',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(5)',
          popover: {
            description: 'こうやって、',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(6)',
          popover: {
            description: 'こうやってですね!',
            side: 'top',
            align: 'start',
          },
        },
        {
          element: '#coach-mark img:nth-child(7)',
          popover: {
            description: 'もう一度見たいなら下のボタンを押してください！',
            side: 'right',
            align: 'start',
          },
        },
      ],
    });

    driverObj.drive();
  };

  const handleButtonClick = () => runCoachMark();

  const avatars = Array.from({ length: AVATAR_COUNT }, (_, index) => (
    <img
      key={index}
      src={pistolPoseWoman}
      width='70px'
      alt={`Image ${index + 1}`}
    />
  ));

  useEffect(() => {
    if (shouldShowCoachMark) runCoachMark();
  }, [shouldShowCoachMark]);

  return (
    shouldShowCoachMark && (
      <CoachMarkStyle id='coach-mark'>
        <div>{avatars}</div>
        <div>
          <button onClick={handleButtonClick}>Show CoachMark</button>
        </div>
      </CoachMarkStyle>
    )
  );
};

export default CoachMark;

const CoachMarkStyle = styled.div`
  div:nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
