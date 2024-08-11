interface DomainData {
  meta: {
    request: {
      granularity: string;
      domain: string;
      start_date: string;
      end_date: string;
    };
  };
  visits: DomainVisit[];
}
