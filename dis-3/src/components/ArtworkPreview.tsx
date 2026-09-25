import type { ArtworkProps } from "../types";
import styled from "styled-components";

const PreviewContainer = styled.div`
    margin: 10px;
    padding: 20px;
    width: 400px;
    min-height: 140px;

    background-color: #f4c6dc;
    border-radius: 15px;

    h2 {
        margin: 0 0 15px;
        color: #5c2941;
        font-family: Georgia, serif;
        font-size: 25px;
    }

    p {
        margin: 0;
        color: #9b5576;
        font-size: 16px;
    }
`;

export default function ArtworkPreview(props: ArtworkProps) {
    return (
        <PreviewContainer>
            <h2>{props.title}</h2>
            <p>{props.artist_title}</p>
        </PreviewContainer>
    );
}