// src/components/BackgroundVideo.js
import React from "react";
import styled from "styled-components";
import background from "../../utils/background_akali.mp4";

const BackgroundVideo = () => {
  return (
    <VideoContainer>
      <video autoPlay loop muted>
        <source src="https://download1326.mediafire.com/6thjw27boojgfl7FmJ4WYpwXGetTsQkOomfp7WpBjeCnEicEknBXg_vYMa3amDDD44ItNrFJjY4Jd6j130oaddbW6TyAfa1zXRQvHhIO6mpmSonOhgzQUMArHpZ4nA-74SsNZSI1w9qFfxHs_QSZ58Dt2vfGWLh2tthHolyKdkYykN0/edont8o41dhqlek/background_akali.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </VideoContainer>
  );
};

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Asegura que el contenedor del video esté detrás del contenido */

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default BackgroundVideo;
