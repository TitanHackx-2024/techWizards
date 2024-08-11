interface CategoryData {
    category: string;
    topSites: Array<{
      domain: string;
      rank: number;
      visits: number;
    }>;
  }
