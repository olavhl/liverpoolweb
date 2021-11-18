import addPlayer from "../../assets/images/addplayer.png";
import React, {FC} from "react";

type DefaultPlayerProps = {
    image: string;
    listKey: React.Key;
}

const TeamSelectionDefaultPlayer: FC<DefaultPlayerProps> = ({image, listKey} : DefaultPlayerProps) => {
    let selectedImage;
    if (image !== "") {
        selectedImage = image
    } else {
        selectedImage = addPlayer
    }

    return <div className={"player-images"} key={listKey}>
        <img className={"add-player-button"} src={selectedImage} alt="Add player"/>
    </div>;
}

export default TeamSelectionDefaultPlayer;