import { stripHtmlFromContent } from "@/utils/helper";
import Head from "next/head";
import { Fragment, ReactNode } from "react";

interface ImageVariations {
  small?: string | null;
  medium?: string | null;
  large?: string | null;
}

interface PageMetaData {
  title?: string | null;
  description?: string | null;
  imageVariations?: ImageVariations | null;
  imageUrl?: string | null;
  children: ReactNode;
}

export default function PageMetaData({
  title,
  description,
  imageVariations,
  imageUrl,
  children,
}: PageMetaData) {
  title = title ? stripHtmlFromContent(title) : title;
  description = description ? stripHtmlFromContent(description) : description;

  return (
    <Fragment>
      <Head>
        {title ? (
          <Fragment>
            <title>{title}</title>
            <meta property="og:title" content={title} key="title" />
            <meta name="twitter:title" content={title} key="twitterTitleTag" />
          </Fragment>
        ) : null}

        {description ? (
          <Fragment>
            <meta name="description" content={description} key="desc" />
            <meta property="og:description" content={description} />
            <meta
              key="twitterDescTag"
              name="twitter:description"
              content={description}
            />
          </Fragment>
        ) : null}

        {imageVariations ? (
          <Fragment>
            {imageVariations.small ? (
              <Fragment>
                <meta property="og:image" content={imageVariations.small} />
                <meta property="og:image:width" content="150" />
                <meta property="og:image:height" content="150" />
                <meta
                  key="twitterImgTag"
                  name="twitter:image"
                  content={imageVariations.small}
                />
              </Fragment>
            ) : null}

            {imageVariations.medium ? (
              <Fragment>
                <meta property="og:image" content={imageVariations.medium} />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />
                <meta
                  key="twitterImgTag"
                  name="twitter:image"
                  content={imageVariations.medium}
                />
              </Fragment>
            ) : null}

            {imageVariations.large ? (
              <Fragment>
                <meta property="og:image" content={imageVariations.large} />
                <meta property="og:image:width" content="600" />
                <meta property="og:image:height" content="600" />
                <meta
                  key="twitterImgTag"
                  name="twitter:image"
                  content={imageVariations.large}
                />
              </Fragment>
            ) : null}
          </Fragment>
        ) : imageUrl ? (
          <Fragment>
            <meta property="og:image" content={imageUrl} />
            <meta key="twitterImgTag" name="twitter:image" content={imageUrl} />
          </Fragment>
        ) : null}

        <meta key="charsetTag" charSet="utf-8" />
        <meta key="ogTypeTag" property="og:type" content="website" />
        <meta key="twitterCardTag" property="twitter:card" content="summary" />
      </Head>

      <h1 className="hidden">{title}</h1>

      {children}
    </Fragment>
  );
}
