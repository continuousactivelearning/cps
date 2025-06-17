import json
import networkx as nx
import matplotlib.pyplot as plt
from pathlib import Path

def visualize_dsa_graph():
    # Path to the JSON file using absolute path
    base_dir = Path(__file__).parent
    json_file_path = base_dir / "python-scraper" / "output" / "dsa_graph.json"
    
    # Check if the file exists
    if not json_file_path.exists():
        print(f"Error: JSON file not found at {json_file_path}")
        # Try an alternative path
        json_file_path = base_dir / "dsa-scraper" / "python-scraper" / "output" / "dsa_graph.json"
        if not json_file_path.exists():
            print(f"Error: Also tried {json_file_path}, but file not found")
            return
    
    # Load the JSON data
    try:
        with open(json_file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
    except json.JSONDecodeError:
        print(f"Error: Invalid JSON format in {json_file_path}")
        return
    except Exception as e:
        print(f"Error reading JSON file: {str(e)}")
        return
    
    # Print data structure for debugging
    print(f"Data loaded. Found {len(data.get('nodes', []))} nodes and {len(data.get('links', []))} links")
      # Create a directed graph
    G = nx.DiGraph()
    
    # Add nodes for concepts
    if 'concepts' in data:
        print(f"Found {len(data['concepts'])} concepts")
        for concept in data['concepts']:
            node_id = concept.get('id')
            if node_id:
                label = concept.get('name', node_id)
                node_type = concept.get('type', 'concept')
                G.add_node(node_id, label=label, type=node_type)
                
                # Add resource nodes and edges
                if 'resources' in concept:
                    resources = concept['resources']
                    
                    # Add video resources
                    if 'videos' in resources:
                        for i, video in enumerate(resources['videos']):
                            video_id = f"{node_id}_video_{i}"
                            video_title = video.get('title', f"Video {i}")
                            G.add_node(video_id, label=video_title, type='resource', resource_type='video')
                            G.add_edge(node_id, video_id)
                    
                    # Add article resources
                    if 'articles' in resources:
                        for i, article in enumerate(resources['articles']):
                            article_id = f"{node_id}_article_{i}"
                            article_title = article.get('title', f"Article {i}")
                            G.add_node(article_id, label=article_title, type='resource', resource_type='article')
                            G.add_edge(node_id, article_id)
                
                # Add edges for prerequisites
                if 'prerequisites' in concept and concept['prerequisites']:
                    for prereq in concept['prerequisites']:
                        G.add_edge(prereq, node_id)
                
                # Add edges for topic suggestions
                if 'topic_suggestions' in concept and concept['topic_suggestions']:
                    for suggestion in concept['topic_suggestions']:
                        G.add_edge(node_id, suggestion)
    
    # Print graph info
    print(f"Graph created with {G.number_of_nodes()} nodes and {G.number_of_edges()} edges")
    
    # Set up the figure with a larger size
    plt.figure(figsize=(20, 15))
    
    # Use a better layout for the graph
    pos = nx.spring_layout(G, k=0.5, iterations=50)
    
    # Draw nodes with different colors based on type
    node_colors = []
    for node in G.nodes():
        node_type = G.nodes[node].get('type', 'concept')
        if node_type == 'resource':
            node_colors.append('lightblue')
        elif node_type == 'concept':
            node_colors.append('lightgreen')
        else:
            node_colors.append('orange')
    
    # Draw the nodes
    nx.draw_networkx_nodes(G, pos, node_size=700, node_color=node_colors, alpha=0.8)
    
    # Draw the edges
    nx.draw_networkx_edges(G, pos, width=1.0, alpha=0.5, arrows=True, arrowsize=20)
    
    # Draw the labels
    node_labels = {node: G.nodes[node].get('label', node) for node in G.nodes()}
    nx.draw_networkx_labels(G, pos, labels=node_labels, font_size=10, font_family='sans-serif')
    
    # Add a title
    plt.title("DSA Knowledge Graph", fontsize=20)
    
    # Remove the axes
    plt.axis('off')
    
    # Save the figure
    output_file = "dsa_graph.png"
    plt.savefig(output_file, format="PNG", dpi=300, bbox_inches='tight')
    print(f"Graph visualization saved to {output_file}")
    
    # Show the graph
    plt.show()

if __name__ == "__main__":
    visualize_dsa_graph()
