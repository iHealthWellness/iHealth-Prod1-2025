import styles from "./index.module.css"


const YouTubePlaylist  = ({  title }) => {

    const playlistId = "PLWRClAjMOjXgo6m6vrypqWbwwCcVb1NEu"

  return (
    <div className={styles.playlistContainer}>
      <h2 className={styles.playlistTitle}>{title}</h2>
      <div className={styles.videoWrapper}>
        <iframe
          src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
          title={title}
          className={styles.youtubeFrame}
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  )
}

export default YouTubePlaylist











// import type React from "react"
// import { useState } from "react"
// import { useQuery } from "@tanstack/react-query"
// import axios from "axios"
// import styles from "./youtube-playlists.module.css"

// const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY
// const CHANNEL_ID = "YOUR_CHANNEL_ID" // Replace with your actual channel ID
// const INITIAL_RESULTS = 5

// interface PlaylistItem {
//   id: string
//   snippet: {
//     title: string
//     thumbnails: {
//       medium: {
//         url: string
//       }
//     }
//   }
// }

// const fetchPlaylists = async (pageToken = "") => {
//   const response = await axios.get("https://www.googleapis.com/youtube/v3/playlists", {
//     params: {
//       part: "snippet",
//       channelId: CHANNEL_ID,
//       maxResults: 50, // Max allowed by the API
//       pageToken: pageToken,
//       key: YOUTUBE_API_KEY,
//     },
//   })
//   return response.data
// }

// const YouTubePlaylists: React.FC = () => {
//   const [displayCount, setDisplayCount] = useState(INITIAL_RESULTS)
//   const { data, isLoading, isError, error, fetchNextPage, hasNextPage } = useQuery({
//     queryKey: ["playlists"],
//     queryFn: ({ pageParam = "" }) => fetchPlaylists(pageParam),
//     getNextPageParam: (lastPage) => lastPage.nextPageToken,
//   })

//   if (isLoading) return <div>Loading...</div>
//   if (isError) return <div>Error: {(error as Error).message}</div>

//   const playlists = data?.pages.flatMap((page) => page.items) || []

//   const loadMore = () => {
//     if (displayCount + INITIAL_RESULTS >= playlists.length && hasNextPage) {
//       fetchNextPage()
//     }
//     setDisplayCount((prevCount) => prevCount + INITIAL_RESULTS)
//   }

//   return (
//     <div className={styles.playlistsContainer}>
//       <h2 className={styles.playlistsTitle}>YouTube Playlists</h2>
//       <div className={styles.playlistsGrid}>
//         {playlists.slice(0, displayCount).map((playlist: PlaylistItem) => (
//           <div key={playlist.id} className={styles.playlistItem}>
//             <img
//               src={playlist.snippet.thumbnails.medium.url || "/placeholder.svg"}
//               alt={playlist.snippet.title}
//               className={styles.playlistThumbnail}
//             />
//             <h3 className={styles.playlistTitle}>{playlist.snippet.title}</h3>
//           </div>
//         ))}
//       </div>
//       {(displayCount < playlists.length || hasNextPage) && (
//         <button onClick={loadMore} className={styles.loadMoreButton}>
//           Load More
//         </button>
//       )}
//     </div>
//   )
// }

// export default YouTubePlaylists

