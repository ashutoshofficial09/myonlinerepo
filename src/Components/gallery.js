import { useState } from "react";

const Gallery = () => {
  const img_1 =
    "https://compass-ssl.xbox.com/assets/48/b7/48b7d00b-45ef-4bf7-b3cc-30e0e5c07d1b.jpg?n=PUBG_GLP-Page-Hero-1084_1920x1080.jpg";
  const img_2 =
    "https://cdn1.dotesports.com/wp-content/uploads/2021/02/23172633/csgo.jpg";
  const img_3 =
    "https://cdn2.unrealengine.com/gamename-store-landscape-2560x1440-2560x1440-606256535.jpg";
  const img_4 =
    "https://compass-ssl.xbox.com/assets/f6/ee/f6ee6bb3-16c2-4cae-97c4-7fc405cb4c76.jpg?n=Devil-May-Cry-5_GLP-Page-Hero-1084_1920x1080_02.jpg";
  const img_5 =
    "https://cdn.vox-cdn.com/thumbor/fygXi96ziVlvqAHPtcx1S8y8kKk=/86x0:1194x831/1200x800/filters:focal(86x0:1194x831)/cdn.vox-cdn.com/uploads/chorus_image/image/49639887/angry-birds-AB_marketing_pose_V14_PO_FINAL_rgb.0.jpg";

  const [mainImg, setMainImg] = useState(img_1);

  const updateMainImage = (img) => {
    setMainImg(img);
  };
  return (
    <div className="container">
      <h1 className="display-1">My Image Gallery</h1>

      <img src={mainImg} className="img-fluid" alt="main img" />

      <div className="row">
        {/* column-1 */}
        <div className="col mt-3">
          <img
            src={img_1}
            className="img-fluid"
            alt="main img"
            onClick={() => {
              updateMainImage(img_1);
            }}
          />
        </div>
        {/* column 2 */}
        <div className="col mt-3">
          <img
            src={img_2}
            className="img-fluid"
            alt="main img"
            onClick={() => {
              updateMainImage(img_2);
            }}
          />
        </div>
        {/* column-3 */}
        <div className="col mt-3">
          <img
            src={img_3}
            className="img-fluid"
            alt="main img"
            onClick={() => {
              updateMainImage(img_3);
            }}
          />
        </div>
        {/* column-4 */}
        <div className="col mt-3">
          <img
            src={img_4}
            className="img-fluid"
            alt="main img"
            onClick={() => {
              updateMainImage(img_4);
            }}
          />
        </div>
        {/* column-5 */}
        <div className="col mt-3">
          <img
            src={img_5}
            className="img-fluid"
            alt="main img"
            onClick={() => {
              updateMainImage(img_5);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Gallery;
