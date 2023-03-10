import Head from "next/head";
import Image from "next/image";
import { ThemeProvider } from "@mui/material/styles";
import { Grid, ImageList, ImageListItem } from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import FullLayout from "../../src/layouts/FullLayout";
import theme from "../../src/theme/theme";

function srcset(image, size, rows = 1, cols = 1) {
	return {
		src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
		srcSet: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format&dpr=2 2x`,
	};
}

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
		title: "Coffee",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
		title: "Hats",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
		title: "Honey",
		author: "@arwinneil",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
		title: "Basketball",
		rows: 2,
		cols: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
		title: "Fern",
		rows: 2,
		cols: 1,
	},
];

const ImageUploader = () => {
	return (
		<>
			<Head>
				<title>Image Uploader | Dashboard | Trendz with Threadz</title>
				<meta name="description" content="Sareewear Dashboard Image Uploader" />
			</Head>

			<ThemeProvider theme={theme}>
				<FullLayout>
					<Grid container spacing={0}>
						<Grid item xs={12} lg={12}>
							<BaseCard title="Images">
								<ImageList
									sx={{ height: 450 }}
									variant="quilted"
									cols={4}
									rowHeight={121}
								>
									{itemData.map((item) => (
										<ImageListItem
											key={item.img}
											cols={item.cols || 1}
											rows={item.rows || 1}
										>
											<Image
												{...srcset(item.img, 121, item.rows, item.cols)}
												alt={item.title}
												loading="lazy"
												layout="fill"
											/>
										</ImageListItem>
									))}
								</ImageList>
							</BaseCard>
						</Grid>
					</Grid>
				</FullLayout>
			</ThemeProvider>
		</>
	);
};

export default ImageUploader;
