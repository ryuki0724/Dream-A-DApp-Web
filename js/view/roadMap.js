$(function () {
    var currentIndex = 0;
    var $timelineItems = $('#timeline .li');
    var $roadmapContainer = $('#roadmap-container');

    var cards = [
        '<div class="card bg-black pixel-border" data-aos="fade-left">' +
        '<div class="card-body">' +
        '<h5 class="card-title pb-5">NFT Pre-Sale</h5>' +
        '<p class="card-text blockquote-footer pb-3">Launch on the Arb chain.</p>' +
        '<p class="card-text blockquote-footer pb-3">Mint NFTs on OpenSea drops, with a total of 41,000.</p>' +
        '<p class="card-text blockquote-footer pb-3">Social media marketing (Twitter, Telegram, Discord).</p>' +
        '<p class="card-text blockquote-footer pb-3">Random NFT giveaways.</p>' +
        '</div>' +
        '</div>',

        '<div class="card bg-black pixel-border" data-aos="fade-left">' +
        '<div class="card-body">' +
        '<h5 class="card-title pb-5">Token Creation and Distribution</h5>' +
        '<p class="card-text blockquote-footer pb-3">Launch the Dream Utopia token after NFT minting is complete.</p>' +
        '<p class="card-text blockquote-footer pb-3">Community voting for launching on ETH or ARB chain.</p>' +
        '<p class="card-text blockquote-footer pb-3">List on decentralized exchange (DEX) platforms such as Uniswap or Sushi Swap.</p>' +
        '<p class="card-text blockquote-footer pb-3">NFT holders, considered as early supporters of the project, will receive airdropped tokens.</p>' +
        '<p class="card-text blockquote-footer pb-3">Distribute airdrops to participants in Twitter activities.</p>' +
        '</div>' +
        '</div>',

        '<div class="card bg-black pixel-border" data-aos="fade-left">' +
        '<div class="card-body">' +
        '<h5 class="card-title pb-5">Initial Exchange Listing</h5>' +
        '<p class="card-text blockquote-footer pb-3">Apply for Dream Utopia to be listed on major centralized exchanges (CEX) such as Binance, Mexc, Gate, Bitget, Bkex.</p>' +
        '<p class="card-text blockquote-footer pb-3">Engage in marketing activities to raise awareness of the token and attract investors.</p>' +
        '<p class="card-text blockquote-footer pb-3">Get listed on CoinGecko and CoinMarketCap.</p>' +
        '</div>' +
        '</div>',

        '<div class="card bg-black pixel-border" data-aos="fade-left">' +
        '<div class="card-body">' +
        '<h5 class="card-title pb-5">Community Building and Growth</h5>' +
        '<p class="card-text blockquote-footer pb-3">Launch a community forum and engage with Dream Utopia token holders to gather feedback and improve the project.</p>' +
        '<p class="card-text blockquote-footer pb-3">Host events and promotions to incentivize people to hold and use the token, such as USDT or second-generation NFTs.</p>' +
        '<p class="card-text blockquote-footer pb-3">Establish partnerships with other projects and influencers to expand Dream Utopia’s reach.</p>' +
        '</div>' +
        '</div>',

        '<div class="card bg-black pixel-border" data-aos="fade-left">' +
        '<div class="card-body">' +
        '<h5 class="card-title pb-5">Long-Term Sustainability</h5>' +
        '<p class="card-text blockquote-footer pb-3">Continue to build and engage with the Dream Utopia community to ensure the project’s longevity.</p>' +
        '<p class="card-text blockquote-footer pb-3">Explore options for governance and decentralization to make the project more community-driven and sustainable in the long term.</p>' +
        '<p class="card-text blockquote-footer pb-3">Work with regulators and compliance experts to ensure that Dream Utopia remains compliant with applicable laws and regulations.</p>' +
        '</div>' +
        '</div>',
    ];

    function updateTimeline() {
        $timelineItems.each(function (index) {
            var $li = $(this);
            $li.toggleClass('complete', index <= currentIndex);
        });

        $roadmapContainer.html(cards[currentIndex]);
    }

    $("#btn-left").on("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateTimeline();
        }
    });

    $("#btn-right").on("click", function () {
        if (currentIndex < $timelineItems.length - 1) {
            currentIndex++;
            updateTimeline();
        }
    });

    updateTimeline();
});
