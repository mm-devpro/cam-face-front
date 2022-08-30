import React from 'react';
import CameraMin from "../../components/camera/CameraMin.component";

import './CameraPage.styles.scss'

const CameraPage = () => {
  let cam_data = {
  0: {
    name: "camera depot",
    startTime: "12/09/2022 - 13h17",
    url:"https://ddme-vps-fr.s3.amazonaws.com/uploads/card-images/_600x400_crop_center-center_80_none/videosurveillance-chantier-vision-loin-cr%C3%A9ation-zone.png?mtime=20190408122600&focal=none&tmtime=20220207193443",
    camNum: 1,
  },
  1: {
    name: "camera entree principale",
    startTime: "12/09/2022 - 09h28",
    url:"https://www.kiwatch.com/wp-content/uploads/2021/11/enregistrement-videosurveillance-1.jpg.webp",
    camNum: 2,
  },
  2: {
    name: "camera parking client",
    startTime: "12/09/2022 - 11h21",
    url:"https://www.securitasdirect.fr/sites/default/files/copropriete-installation-videosurveillance_securitas-direct.jpg",
    camNum: 34,
  },
  3: {
    name: "camera entree bureaux",
    startTime: "12/09/2022 - 11h44",
    url:"https://thumbs.dreamstime.com/b/jolie-jeune-femme-une-cloche-sonnant-d-un-appartement-de-l-171463310.jpg",
    camNum: 548,
  },
  4: {
    name: "camera cashier desk",
    startTime: "12/09/2022 - 12h01",
    url:"https://c8.alamy.com/compfr/rdp5a0/jeune-femme-choisie-par-le-logiciel-de-detection-de-visage-ou-de-reconnaissance-faciale-rdp5a0.jpg",
    camNum: 1141,
  },
  }

  return (
    <div className="camera-page">
      <div className="camera-container">
        {
          cam_data &&
          Object.entries(cam_data).map((key, value) => {
            console.log(cam_data[value])
            return (
              <CameraMin key={key} data={cam_data[value]}/>
            )}
          )
        }
      </div>
    </div>
  );
};

export default CameraPage;
