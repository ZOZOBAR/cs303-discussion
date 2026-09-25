import { useEffect, useState } from "react";
import ArtworkPreview from "./ArtworkPreview";
import type { ArtworkProps } from "../types";

export default function ArtworksListContent() {
    const [numArtworks, setNumArtworks] = useState(10);
    const [artworks, setArtworks] = useState<ArtworkProps[]>([]);

    useEffect(() => {
        async function fetchArtworks() {
            const response = await fetch(`https://api.artic.edu/api/v1/artworks?limit=${numArtworks}`);
            const json = await response.json();
            setArtworks(json.data);
        }

        fetchArtworks();
    }, [numArtworks]);



    return (
        <div>
            <input
                type="number"
                value={numArtworks}
                onChange={(e) => setNumArtworks(Number(e.target.value))}
            />

            <p>Number of artworks: {numArtworks}</p>

            {artworks.map((artwork) => (
                <ArtworkPreview
                    key={artwork.id}
                    {...artwork}
                />
            ))}
        </div>
    );
}