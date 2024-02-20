function addLiElementRepairCampaign(
    pageSelector,
    buttonText,
    backgroundImage,
    linkUrl
) {
    var pageElement = document.querySelector(pageSelector);
    if (pageElement) {
        // Create a new li element
        var newLi = document.createElement("li");
        newLi.className = "ais-InfiniteHits-item new-el";
        newLi.style.backgroundImage = "url('" + backgroundImage + "')";

        var newAnchor = document.createElement("a");
        newAnchor.href = linkUrl; // Set the href to the provided linkUrl

        // Create a button element
        var newButton = document.createElement("button");
        newButton.innerText = buttonText;

        newAnchor.appendChild(newButton);

        newLi.appendChild(newAnchor);

        // Find the ul element containing the list
        var ulElement = pageElement.querySelector(
            "#category .ais-InfiniteHits-list"
        );

        // Insert the new li element at the beginning of the list
        ulElement.insertBefore(newLi, ulElement.firstChild);
    }
}

// Category Ranici
addLiElementRepairCampaign(
    ".category-id-3559",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Backpack.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3558",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Backpack.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-5751",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Backpack.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);

// Category Qketa
addLiElementRepairCampaign(
    ".category-id-3540",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Jacket.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3549",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Jacket.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-6978",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Jacket.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-6976",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Jacket.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);

// Category Palatki
addLiElementRepairCampaign(
    ".category-id-4636",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Tent.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4638",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Tent.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4642",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Tent.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4640",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Tent.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);

// Category Velosipedi
addLiElementRepairCampaign(
    ".category-id-4815",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_Bike.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);

// Category SUP
addLiElementRepairCampaign(
    ".category-id-4890",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_SUP.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4878",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/Marketing_block_256x410px_SUP.png",
    "https://www.decathlon.bg/content/111-repair-campaign?opeco=opeco:repair-campaign-listing&type=opeco"
);

// Category Ranici
addLiElementRepairCampaign(
    ".category-id-7726",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3556",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4721",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4722",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4745",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4747",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3963",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-7047",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4740",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3206",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-4728",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3429",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3560",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-3524",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);
addLiElementRepairCampaign(
    ".category-id-5625",
    "Виж повече",
    "https://storage.googleapis.com/static-assets.decathlon.bg/img/banner-for-listing-page-tree.png",
    "https://www.decathlon.bg/content/122-kak-da-se-podgotvim-za-zimnata-vakanciya-decathlon?opeco=opeco:winter-advice-listing&type=opeco"
);