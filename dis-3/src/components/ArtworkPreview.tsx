import type { ArtworkProps } from "../types";
import styled from "styled-components";

const PreviewContainer = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`;

export default function ArtworkPreview(props: ArtworkProps) {
    return (
        <PreviewContainer>
            <h2>{props.title}</h2>
            <p>{props.artist_title}</p>
        </PreviewContainer>
    );
}