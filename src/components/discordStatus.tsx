"use client";
import { Icon } from "@iconify/react";
import { Fragment } from "react";
import { useDiscordStatus } from "@/lib/useDiscordStatus";
import Image from "next/image";
import { ReactNode } from "react";

type PFP =
  | {
      no_icon: boolean;
    }
  | {
      link: string;
      alt: string;
      href?: string;
    };

interface Status {
  pfp: PFP;
  title: string;
  description: string | Array<string>;
  icon?: string | ReactNode;
}

export default function DiscordStatus() {
  const { loading, status } = useDiscordStatus();
  if (loading) return <div>loading</div>;
  if (!status) return <div>Could not fetch Discord Status</div>;

  const statuses: Array<Status> = [
    {
      pfp: {
        link: `https://cdn.discordapp.com/avatars/${status.discord_user.id}/${status.discord_user.avatar}.webp?size=256`,
        alt: "Discord Profile Picture",
      },
      title: status.discord_user.username,
      description: `#${status.discord_user.discriminator}`,
    },
    ...(status.spotify && status.listening_to_spotify
      ? [
          {
            pfp: {
              link: status.spotify.album_art_url,
              alt: `${status.spotify.song} - ${status.spotify.artist}`,
              href: `https://open.spotify.com/track/${status.spotify.track_id}`,
            },
            title: status.spotify.song,
            description: status.spotify.artist,
          },
        ]
      : []),
  ];

  return (
    <div className="flex flex-col space-y-5 w-full max-w-sm mx-auto px-4 py-4 bg-white/50 dark:bg-gray-900/50 dark:border-gray-600 backdrop-filter backdrop-blur-sm border-2 border-gray-200 rounded-lg hover:shadow-lg default-transition">
      {statuses.map((status, index) => {
        return (
          <Fragment key={index}>
            <div className="inline-flex items-center">
              {"no_icon" in status.pfp ? (
                <div className="max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500">
                  ADD AN ICON
                </div>
              ) : status.pfp.href ? (
                <a
                  className="rounded default-transition default-focus"
                  href={status.pfp.href}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div className="max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500">
                    <Image
                      alt={status.pfp.alt}
                      className="w-full max-h-12 rounded"
                      height={48}
                      src={status.pfp.link}
                      width={48}
                    />
                  </div>
                </a>
              ) : (
                <div className="max-w-md max-h-12 my-auto rounded pointer-events-none select-none ring-2 ring-gray-200 dark:ring-gray-500">
                  <Image
                    alt={status.pfp.alt}
                    className="w-full max-h-12 rounded"
                    height={48}
                    src={status.pfp.link}
                    width={48}
                  />
                </div>
              )}

              <div className="flex-1 ml-4">
                {"no_icon" in status.pfp && status.pfp.no_icon ? (
                  <>
                    <p className="mt-0 mb-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400">
                      Playing
                    </p>
                    <h1 className="text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white">
                      {status.title}
                    </h1>
                  </>
                ) : Array.isArray(status.description) ? (
                  <>
                    <h1 className="text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white">
                      {status.title}
                    </h1>
                    {status.description.map((description, descriptionIndex) => (
                      <p
                        className="mt-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400"
                        key={descriptionIndex}
                      >
                        {description}
                      </p>
                    ))}
                  </>
                ) : (
                  <>
                    <h1 className="text-base font-extrabold line-clamp-1 tracking-wide overflow-ellipsis text-gray-900 dark:text-white">
                      {status.title}
                    </h1>
                    <p className="mt-1 text-xs tracking-wide font-medium text-gray-500 dark:text-gray-400">
                      {status.description}
                    </p>
                  </>
                )}
              </div>
            </div>

            {index + 1 !== statuses.length && (
              <hr className="h-0.5 bg-gray-100 dark:bg-gray-600 border-none rounded-full" />
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
